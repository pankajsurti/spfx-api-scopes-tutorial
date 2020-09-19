import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ClientMode } from "./ClientMode";

export interface IGraphConsumerProps {
//  description: string;
  clientMode: ClientMode;
  context: WebPartContext;
  //searchFor: string;
}
