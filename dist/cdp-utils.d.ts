declare const waitForNetworkIdle: (Network: any, waitFor: number) => Promise<void>;
declare const querySelector: (DOM: any, contextNodeId: number, selector: string) => Promise<number>;
declare const xpath: (DOM: any, query: string) => Promise<number[]>;
declare const hideNode: (DOM: any, nodeId: number) => Promise<void>;
declare const screenshotNode: (Page: any, DOM: any, nodeId: number) => Promise<Buffer>;

export { hideNode, querySelector, screenshotNode, waitForNetworkIdle, xpath };
