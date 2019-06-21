var app = new Vue({
	el: '#app',
	data: {
		product: "Socks",
		brand: "Vue Mastery",
		description: "A pair of warm, fuzzy socks.",
		selectedVariant: 0,
		link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
		onSale: false,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "./assets/vmSocks-green.png",
				variantQuantity: 5
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "./assets/vmSocks-blue.png",
				variantQuantity: 0
			}
		],
		sizes: ["30-35", "36-41", "41-46"],
		cart: 0,
	},
	methods: {
		addToCart() {
			this.cart ++
			this.variants[this.selectedVariant].variantQuantity --
		},
		removeFromCart() {
			this.cart --
			this.variants[this.selectedVariant].variantQuantity ++
		},
		updateProduct(index) {
			this.selectedVariant = index
			console.log(index)
		}
	},
	computed: {
		title() {
			return this.brand + " " + this.product
		},
		image() {
			return this.variants[this.selectedVariant].variantImage
		},
		inventory() {
			return this.variants[this.selectedVariant].variantQuantity
		},
		sale() {
			if (this.onSale) {
				return this.brand + " " + this.product + " are on sale!"
			}
				return this.brand + " " + this.product + " are not on sale"
		}
	}
})