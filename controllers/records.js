const Record = require('../models/record');

module.exports = {
	getRecords: async () => {
		try {
			return await Record.find({});

		} catch (error) {
			return error;
		}
	},

	// getRecord: async (id) => {
	// 	try {
	// 		const record = await Record.findOne({ where:{ id } });

	// 		return record;  

	// 	} catch (error) {
	// 		return error;
	// 	}
	// },

	createRecord: async (new_record) => {
		const record = await Record.findOne({ player: new_record.player });
		let wins = record.wins;
		if(record) {
			wins++;
		}
			
		if(!record){
			updatedRecord = {
				player: new_record.player,
				wins: 1
			}
			await Record.create(updatedRecord);
		}
		else{
			updatedRecord = {
				player: record.player,
				wins: parseInt(record.wins) + 1
			}
			await record.save(updatedRecord);
		}
			
		return {
			title: 'Success',
			description: 'Record created'
		}; 
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