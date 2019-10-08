const Record = require('../models/record');

module.exports = {
	getRecords: async () => {
		try {
			return await Record.find({});

		} catch (error) {
			return error;
		}
	},

	updateRecord: async (new_record) => {
		const record = await Record.findOne({ player: new_record.player });
		let wins = 1;
		if(record){
			wins = record.wins + 1;
			await Record.updateOne({player: new_record.player}, {$set: {wins}});
		}
		else
			await Record.create({ player: new_record.player, wins });
		
		return {
			title: 'Success',
			description: 'Record updated'
		}; 
	},

}