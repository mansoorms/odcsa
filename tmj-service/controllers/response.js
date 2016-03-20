module.exports = {
	error : function(reason) {
		return {
			"status" : "error",
			"data" : reason
		};
	},

	success : function(data) {
		return {
			"status" : "success",
			"data" : data
		};
	}
};
