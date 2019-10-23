var db = require('./db')

module.exports = {

	getById: function(id, callback){

			var sql = "select * from login where id=?";
			db.getResults(sql, [id], function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	validate: function(user, callback){
		var sql ="select * from login where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select * from user";
		
		db.getResults(sql, [], function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(user, callback){

		var sql ="insert into employee values('', ?, ?, ?, ?, ?)";
		db.execute(sql, [user.empName, user.compName, user.contact, user.username, user.password], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql ="update login set username=?, password=? where id=?";
	
		db.execute(sql, [user.username, user.password, user.id], function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from login where id=?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	}
}



