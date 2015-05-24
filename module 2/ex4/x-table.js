var XTableProto = Object.create(HTMLDivElement.prototype);

Object.defineProperties(XTableProto, {
	"hidden": {
		get: function () {
			return this.style.visibility === "hidden";
		},
		set: function (value) {
			value ? this.hide() : this.show();
		}
	},
	"hide": {
		value: function () {
			this.style.visibility = "hidden";
		},
		writable: false
	},
	"show": {
		value: function () {
			this.style.visibility = "visible";
		},
		writable: false
	},
	"data": {
		get: function () {
			return this.json;
		},
		set: function (value) {
			var json = value;

			if (this.shadowRoot)
				this.shadowRoot.removeChild(this.shadowRoot.querySelector("table"));

			if (json.constructor === Object) {
				var table = document.createElement("table"),
					thead = document.createElement("thead"),
					tbody = document.createElement("tbody"),
					trow = document.createElement("tr");

				//Get the name of the fields
				for (var pro in json.response[0]) {
					if (json.response[0].hasOwnProperty(pro)) {
						var td = document.createElement("td");
						td.innerHTML = pro;
						trow.appendChild(td);
					}
				}

				//Get the values for each object.
				json.response.forEach(function (obj) {
					var row = document.createElement("tr");

					for (var pro in obj) {
						if (obj.hasOwnProperty(pro)) {
							var col = document.createElement("td");
							col.innerHTML = obj[pro];
							row.appendChild(col);
						}
					}
					tbody.appendChild(row);
				});

				thead.appendChild(trow);
				table.appendChild(thead);
				table.appendChild(tbody);
				this.shadowRoot? this.shadowRoot.appendChild(table) : this.createShadowRoot().appendChild(table);
			} else {
				alert("Insert a proper JSON");
			}
		}
	}
});

XTable = document.registerElement("x-table", {
	prototype: XTableProto
});