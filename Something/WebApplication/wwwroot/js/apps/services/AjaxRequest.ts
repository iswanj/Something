export const AjaxRequest = {
    post(url: string, data: any): Promise<any> {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    },
};
