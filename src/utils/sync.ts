import { useEffect } from "react";
import { TabSyncMessage } from "../types";

const CHANNEL_NAME = "ai_data_automation_sync";

// Generate a unique ID for this tab instance
export const getTabId = () => {
  if (typeof window === "undefined") return "server";
  let id = sessionStorage.getItem("tab_instance_id");
  if (!id) {
    id = "tab_" + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem("tab_instance_id", id);
  }
  return id;
};

let channel: BroadcastChannel | null = null;

export const getSyncChannel = (): BroadcastChannel | null => {
  if (typeof window === "undefined") return null;
  if (!channel && typeof BroadcastChannel !== "undefined") {
    channel = new BroadcastChannel(CHANNEL_NAME);
  }
  return channel;
};

export const broadcastMessage = (type: TabSyncMessage["type"], payload: any) => {
  const chan = getSyncChannel();
  if (chan) {
    const msg: TabSyncMessage = {
      type,
      payload,
      senderTabId: getTabId(),
    };
    chan.postMessage(msg);
  }
};

export const useTabSyncListener = (onMessage: (msg: TabSyncMessage) => void) => {
  useEffect(() => {
    const chan = getSyncChannel();
    if (!chan) return;

    const handler = (event: MessageEvent) => {
      const msg = event.data as TabSyncMessage;
      if (msg && msg.senderTabId !== getTabId()) {
        onMessage(msg);
      }
    };

    chan.addEventListener("message", handler);
    return () => {
      chan.removeEventListener("message", handler);
    };
  }, [onMessage]);
};
