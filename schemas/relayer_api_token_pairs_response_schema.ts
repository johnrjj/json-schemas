export const relayerApiTokenPairsResponseSchema = {
    id: '/RelayerApiTokenPairsResponse',
    type: 'array',
    items: {
        type: 'array',
        $ref: '/RelayerApiTokenPair',
    },
};

export const relayerApiTokenPairSchema = {
    id: '/RelayerApiTokenPair',
    type: 'array',
    items: {
        type: 'string',
        $ref: '/Address',
    },
    minItems: 2,
    maxItems: 2,
    uniqueItems: true,
};
