var app = new Vue({
	el: '#app',
	data: {
		product: "Socks",
		description: "A pair of warm, fuzzy socks.",
		image: "./assets/vmSocks-green.png",
		link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
		inventory: 9,
		onSale: false,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "./assets/vmSocks-green.png"
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "./assets/vmSocks-blue.png"
			}
		],
		sizes: ["30-35", "36-41", "41-46"],
		cart: 0,
	},
	methods: {
		addToCart() {
			this.cart ++
		},
		removeFromCart() {
			this.cart --
		},
		updateProduct(variantImage) {
			this.image = variantImage
		}
	}
})