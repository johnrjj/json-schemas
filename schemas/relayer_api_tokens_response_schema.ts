export const relayerApiTokensResponseSchema = {
    id: '/RelayerApiTokensResponse',
    type: 'object',
    patternProperties: {
        '^0x[0-9a-f]{40}$': {
            type: 'object',
            $ref: '/RelayerApiTokenTradeInfo',
        },
    },
    additionalProperties: false,
};

export const relayerApiTokenTradeInfoSchema = {
    id: '/RelayerApiTokenTradeInfo',
    type: 'object',
    properties: {
        symbol: {type: 'string'},
        decimals: {type: 'number'},
        minAmount: {$ref: '/Number'},
        maxAmount: {$ref: '/Number'},
        precision: {type: 'number'},
    },
    required: ['symbol', 'decimals'],
};
