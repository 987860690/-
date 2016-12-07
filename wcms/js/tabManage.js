//增加单击触发事件
				var editingId;
				function edit(){
					if(editingId!=undefined){
						$('#tabTreegrid').treegrid('select',editingId);
						return;
					}
					var row=$('#tabTreegrid').treegrid('getSelected');
					if(row){
						editingId=row.id
						$('#tabTreegrid').treegrid('beginEdit',editingId);
					}
				}
				
				function save(){
					if(editingId!=undefined){
						var t=$('#tabTreegrid');
						t.treegrid('endEdit',editingId);
						editingId=undefined;
						var persons=0;
						var rows=t.treegrid('getChildren');
						for(var i=0;i<rows.length;i++){
							var p=parseInt(rows[i].persons);
							if(!isNaN(p)){
								persons+=p;
							}
						}
						var frow=t.treegrid('getFooterRows')[0];
						frow.persons=persons;
						t.treegrid('reloadFooter');
					}
				}
				function cancel(){
					if(editingId!=undefined){
						$('#tabTreegrid').treegrid('cancelEdit',editingId);
						editingId=undefined;
					}
				}
			