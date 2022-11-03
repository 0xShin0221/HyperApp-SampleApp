export const HYPERAPP_CONTRACT_ADDRESS =
  '0x4032127F9f27f97dF67a0169F5B58E37F913568a';

export const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    inputs: [
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      {
        internalType: 'string[]',
        name: '_navigationItems',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '_navigationItemLinks',
        type: 'string[]',
      },
    ],
    name: 'addNavItems',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
    name: 'getHTML',
    outputs: [
      {
        components: [
          {
            components: [
              { internalType: 'string', name: 'title', type: 'string' },
              {
                internalType: 'string',
                name: 'metaDescription',
                type: 'string',
              },
            ],
            internalType: 'struct HyperAppHTML.Header',
            name: 'header',
            type: 'tuple',
          },
          {
            internalType: 'string[]',
            name: 'navigationItems',
            type: 'string[]',
          },
          {
            internalType: 'string[]',
            name: 'navigationItemLinks',
            type: 'string[]',
          },
        ],
        internalType: 'struct HyperAppHTML.HTML',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'htmls',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'title', type: 'string' },
          { internalType: 'string', name: 'metaDescription', type: 'string' },
        ],
        internalType: 'struct HyperAppHTML.Header',
        name: 'header',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
    name: 'initNavItem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'string', name: '_title', type: 'string' },
      { internalType: 'string', name: '_metaDescription', type: 'string' },
      {
        internalType: 'string[]',
        name: '_navigationItems',
        type: 'string[]',
      },
      {
        internalType: 'string[]',
        name: '_navigationItemLinks',
        type: 'string[]',
      },
    ],
    name: 'registHTML',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
];
