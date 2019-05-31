<template>
	<div>
		<button @click="getRangesForCategory(item.description.category)">Get price range</button>
		<p>
			{{range}}
		</p>
		<h1>Inventory</h1>
		<br>
		<h2>Add item</h2>
		<div style="width: 100%; height: 100%;">
		  <fieldset>
		    <legend>Item description:</legend>
			    <table>	
			    	<col width="150">
			    	<tr>
				    	<td>Item name:</td>
					    <td><input type="text" v-model="item.description.name"><br></td>
					  </tr>
					  <tr>
					    <td>Item category:</td>
					    <td><select v-model="item.description.category">
							  <option value="mobo">Mobo</option>
							  <option value="gpu">GPU</option>
							  <option value="cpu">CPU</option>
							  <option value="ram">RAM</option>
							</select></td>
						</tr>
						<tr>
					    <td>Item price:</td>
					    <td><input type="number" v-model="item.description.price"><br></td>
						</tr> 
					</table>
		  </fieldset>
		  <fieldset>
		    <legend>Item specifications:</legend>
		    <table>
		    	<col width="150">
		    	<tr>
		    		<td>Item weight:</td>
			    	<td><input type="number" v-model="item.specifications.weight"><br></td>
			    </tr>
			   	<tr>
				    <td>Item size:</td>
				    <td><input type="text" v-model="item.specifications.size"><br></td>
				  </tr>
				  <tr>
				    <td>Item health:</td>
				    <td><select v-model="item.specifications.health">
						  <option value="new">New</option>
						  <option value="used">Used</option>
						  <option value="refurbished">Refurbished</option>
						</select></td>
					</tr>
				</table>
				<br>
			</fieldset>
			<br>
			<button @click="submitAddItemForm">Add item</button>
		</div>
		<p class="error">
			{{msg}}
		</p>
	</div>
</template>

<script>

import api from '../api/api'

const ranges = [ // THIS WILL BE OBTAINED FROM API
	{
		category: 'mobo',
		budget: 100,
		mid_range: 150
	},
	{
		category: 'gpu',
		budget: 200,
		mid_range: 350
	},
	{
		category: 'cpu',
		budget: 100,
		mid_range: 250
	},
	{
		category: 'ram',
		budget: 75,
		mid_range: 150
	}
]

export default {
	name: 'Inventory',
	data () {
		return {
			msg: '',
			item: {
				description: {
					name: '',
					category: '',
					price: null
				},
				specifications: {
					weight: null,
					size: '',
					health: ''
				}
			},
			resetItem: {
				description: {
					name: '',
					category: '',
					price: null
				},
				specifications: {
					weight: null,
					size: '',
					health: ''
				}
			},
			range: ''
		}
	},
	methods: {
		testMethod () {
			api.logMe('Fuck you mate')
		},
		submitAddItemForm () { // TODO: make wrapper/interface for adding of items
			this.msg = ''
			let err = 0
			let item = this.item
			if (!this.verifyTypeAndValue(item.description.name, 'string')) {
				err += 1
				this.msg += 'Name needs to be a string and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(item.description.category, 'string')) {
				err += 1
				this.msg += 'Category needs to be a string and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(Number(item.description.price), 'number')) {
				err += 1
				this.msg += 'Price needs to be a number and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(Number(item.specifications.weight), 'number')) {
				err += 1
				this.msg += 'Weight needs to be a number and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(item.specifications.size, 'string')) {
				err += 1
				this.msg += 'Size needs to be a string and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(item.specifications.health, 'string')) {
				err += 1
				this.msg += 'Health needs to be a string and not empty.' + '\n'
			}
			if (err === 0) {
				this.msg = 'Success'

				let priceRange = this.calculatePriceRange(item)
				item.priceRange = priceRange

				this.range = priceRange
				console.log('Mock: sent to API.')
				this.resetInputs()
				return
			} else {
				console.log('FAILED')
			}
		},
		calculatePriceRange (item) {
			let priceRange = this.getRangesForCategory(item.description.category)
			console.log(priceRange)
			console.log(item.description)
			if (Number(item.description.price) <= priceRange.budget) {
				console.log('budget')
				return 'budget'
			} else if (Number(item.description.price) <= priceRange.mid_range) {
				console.log('mid_range')
				return 'mid_range'
			} else {
				console.log('highEnd')
				return 'highEnd'
			}
		},
		getRangesForCategory (category) {
			console.log(category)
			let out = null
			for (var i = ranges.length - 1; i >= 0; i--) {
				if (ranges[i].category === category) {
					out = ranges[i]
				}
			}
			console.log(out)
			this.range = out
			return out
		},
		verifyTypeAndValue (object, type) {
			if (!object) {
				return false
			}
			if (typeof object === type) {
				return true
			} else {
				return false
			}
		},
		resetInputs () {
			this.item = this.resetItem
		}
	}
}

</script>

<style scoped>
.div {
	background-color: red;
}

legend {
	color: #FF9900;
}

fieldset {
	border-color: grey;
}

button {
	border: none;
	background-color: grey;
	color: white;
	transition: 0.2s all;
	margin: 1px;
	padding: 5px;
	border-radius: 5px;
}

button:hover {
	color: grey;
	background-color: white;
	cursor: pointer;
}


</style>