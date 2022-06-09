import BotRate from './bot_rate';

export default {
    async fetch(request, env, ctx) {
        var url = new URL(request.url);
        if (url.pathname !== '/') {
            return new Response(null, {
                status: 404,
                statusText: 'Not Found',
            });
        }

        let botRate = await BotRate();
        const json = JSON.stringify(botRate, null, 2);

        return new Response(json, {
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Cache-Control': 's-maxage=300',
            },
        });
    },
};