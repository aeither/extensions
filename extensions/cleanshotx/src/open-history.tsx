import { closeMainWindow, open } from "@raycast/api";

export default async function Command() {
  const url = "cleanshot://open-history";
  await closeMainWindow();
  open(url);
}
