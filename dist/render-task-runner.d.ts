declare function renderTaskRunner(): (label: string) => {
    success(message: any): void;
    error(message: any): void;
};

export { renderTaskRunner as default };
