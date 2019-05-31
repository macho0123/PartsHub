<template>
	<div>
		<h1>Accounts</h1>
		<br>
		<h2>Add account</h2>
		<div style="width: 100%; height: 100%;">
		  <fieldset>
		    <legend>Personal information:</legend>
			    <table>	
			    	<col width="150">
			    	<tr>
				    	<td>First name:</td>
					    <td><input type="text" v-model="account.personal.name"><br></td>
					</tr>
					<tr>
				    	<td>Surname:</td>
					    <td><input type="text" v-model="account.personal.surname"><br></td>
					</tr>
					<tr>
				    	<td>Middle name:</td>
					    <td><input type="text" v-model="account.personal.middleName"><br></td>
					</tr>
					<tr>
				    	<td>Address:</td>
					    <td><input type="text" v-model="account.personal.address"><br></td>
					</tr>
					<tr>
				    	<td>Date of birth:</td>
					    <td><input type="date" v-model="account.personal.dateOfBirth"><br></td>
					</tr>	
				</table>
		  </fieldset>
		  <fieldset>
		    <legend>Access information:</legend>
		    <table>
		    	<col width="150">
				<tr>
				    <td>Position:</td>
				    <td><select v-model="account.company.position">
						  <option value="new">Sales</option>
						  <option value="used">Management</option>
						  <option value="refurbished">Storage</option>
						</select>
					</td>
				</tr>
				<tr>
		    		<td>Username:</td>
			    	<td><input type="text" v-model="account.company.username"><br></td>
			    </tr>
			    <tr>
		    		<td>Password:</td>
			    	<td><input type="text" v-model="account.company.password"><br></td>
			    </tr>
			    <tr>
		    		<td>Repeat password:</td>
			    	<td><input type="text" v-model="account.company.passwordTest"><br></td>
			    </tr>
			</table>
			<br>
			</fieldset>
			<br>
			<button @click="submitAddAccountForm">Add account</button>
		</div>
		<p class="error">
			{{msg}}
		</p>
	</div>
</template>

<script>

export default {
	name: 'Accounts',
	data () {
		return {
			msg: '',
			account: {
				personal: {
					name: '',
					surname: '',
					middleName: '',
					address: '',
					dateOfBirth: null
				},
				company: {
					position: null,
					password: '',
					passwordTest: '',
					username: ''
				}
			},
			resetAccounts: {
				personal: {
					name: '',
					surname: '',
					middleName: '',
					address: '',
					dateOfBirth: null
				},
				company: {
					position: null,
					password: '',
					passwordTest: '',
					username: ''
				}
			}
		}
	},
	methods: {
		submitAddAccountForm () { // TODO: make wrapper/interface for adding of items
			console.log('start')
			this.msg = ''
			let err = 0
			let account = this.account
			if (!this.verifyTypeAndValue(account.personal.name, 'string')) {
				err += 1
				this.msg += 'Name needs to be a string and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(account.personal.surname, 'string')) {
				err += 1
				this.msg += 'Surname needs to be a string and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(account.personal.address, 'string')) {
				err += 1
				this.msg += 'Address needs to be a string and not empty.' + '\n'
			}
			try {
				let date = new Date(account.personal.dateOfBirth)
			} catch (error) {
				err += 1
				console.log(error)
				this.msg += 'Date of birth needs to be a date and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(account.company.position, 'string')) {
				err += 1
				this.msg += 'Position needs to be a string and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(account.company.password, 'string')) {
				err += 1
				this.msg += 'Password needs to be a string and not empty.' + '\n'
			}
			if (!this.verifyTypeAndValue(account.company.passwordTest, 'string')) {
				err += 1
				this.msg += 'Password repeat needs to be a string and not empty.' + '\n'
			}
			if (account.company.password !== account.company.passwordTest) {
				err += 1
				this.msg += 'Password does not match the repeated password.'
			}
			console.log('Here')
			if (err === 0) {
				this.msg = 'Success'

				console.log('Mock: sent to API.')
				this.resetInputs()
				return
			} else {
				console.log('FAILED')
			}
		},
		verifyTypeAndValue (object, type) {
			if (!object) {
				console.log(object)
				console.log(type)
				console.log(typeof object)
				return false
			}
			if (typeof object === type) {
				return true
			} else {
				console.log(object)
				console.log(type)
				console.log(typeof object)
				return false
			}
		},
		resetInputs () {
			this.account = this.resetAccounts
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