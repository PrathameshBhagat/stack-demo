import { StackClientApp } from "@stackframe/react";
import { useNavigate } from "react-router-dom";

export const stackClientApp = new StackClientApp({
  // You should store these in environment variables
  projectId: "f7b2fe22-bc00-4e55-9962-d639980e61f6",
  publishableClientKey: "pck_e104pm2e60kh2qda7fynhgn5tbnan6ammp3thhr9p1h08",
  tokenStore: "cookie",
  redirectMethod: {
    useNavigate,
  }
});