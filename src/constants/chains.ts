import { Chain } from 'wagmi'

interface Icon {
	iconUrl: string
}

export const avalanche: Chain = {
	id: 43114,
	name: 'Avalanche',
	network: 'avalanche',
	nativeCurrency: {
		decimals: 18,
		name: 'Avalance',
		symbol: 'AVAX',
	},
	rpcUrls: {
		default: 'https://api.avax.network/ext/bc/C/rpc',
	},
	blockExplorers: {
		default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
	},
	testnet: false,
}

export const xdai: Chain & Icon = {
	id: 100,
	name: 'Gnosis Chain',
	network: 'Gnosis Chain',
	nativeCurrency: {
		decimals: 18,
		name: 'xDai',
		symbol: 'xDai',
	},
	rpcUrls: {
		default: 'https://rpc.gnosischain.com',
	},
	blockExplorers: {
		default: { name: 'Blockscout', url: 'https://blockscout.com/xdai/mainnet' },
	},
	testnet: false,
	iconUrl: '/chains/xdai.png',
}

export const bsc: Chain & Icon = {
	id: 56,
	name: 'Binance Smart Chain',
	network: 'Binance Smart Chain',
	nativeCurrency: {
		decimals: 8,
		name: 'Binance Coin',
		symbol: 'BNB',
	},
	rpcUrls: {
		default: 'https://rpc.ankr.com/bsc',
	},
	blockExplorers: {
		default: { name: 'BNB Smart Chain', url: 'https://bscscan.com' },
	},
	testnet: false,
	iconUrl: '/chains/bsc.png',
}

export const fantom: Chain & Icon = {
	id: 250,
	name: 'Fantom Opera',
	network: 'Fantom Opera',
	nativeCurrency: {
		decimals: 18,
		name: 'Fantom',
		symbol: 'FTM',
	},
	rpcUrls: {
		default: 'https://rpc.ankr.com/fantom',
	},
	blockExplorers: {
		default: { name: 'Fantom Blockchain Explorer', url: 'https://ftmscan.com/' },
	},
	testnet: false,
	iconUrl: '/chains/fantom.png',
}
