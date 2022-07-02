export default {
	async registerCoach(context, data) {
		const userId = context.rootGetters.userId;
		const coachData = {
			id: context.rootGetters.userId,
			firstName: data.first,
			lastName: data.last,
			description: data.desc,
			hourlyRate: data.rate,
			areas: data.areas
		};
		const response = await fetch(`https://vue-http-demo-8e969-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
			method: 'PUT',
			body: JSON.stringify(coachData)
		});
		// const responseData = await response.json();
		if (!response.ok) {
			// errors...
		}
		context.commit('registerCoach', {
			...coachData,
			id: userId
		});
	},
	loadCoaches: async function (context) {
		const response = await fetch(`https://vue-http-demo-8e969-default-rtdb.firebaseio.com/coaches.json`);
		const responseData = await response.json();
		if (!response.ok) {
			// errors...
		}
		const coaches = [];
		for (const key in responseData) {
			const coach = {
				firstName: responseData[key].firstName,
				lastName: responseData[key].lastName,
				description: responseData[key].description,
				hourlyRate: responseData[key].hourlyRate,
				areas: responseData[key].areas
			};
			coaches.push(coach);
		}
		context.commit('setCoaches', coaches);
	}
};