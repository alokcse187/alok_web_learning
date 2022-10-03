// Flatten Object

let obj = {
    name: "Alok Singh",
    age: 30,
    addrees: {
        HNo: "80C",
        City: "Noida",
        pincode: 201301
    },
    Parents: {
        father: {
            name: "Janardan Singh",
            Parents: {
                fatherName: "Late Anshuman Singh",
                Mothername: "Late Gomti Devi Singh",
                addrees: {
                    vill: "Dharupur",
                    state: "Uttar Pradesh",
                    pincode: 224176
                }
            },
        },
        mother: {
            name: "Vidya Singh",
            addrees: {
                vill: "Imadpur",
                state: "Uttar Pradesh",
                pincode: 22439
                
            }
        },
        addrees: {
            vill: "Imadpur",
            state: "Uttar Pradesh",
            pincode: 22439
        }
    },
    num: [1,[2,[3,[4,5,[6,7],8,[9,[10]]]]]]
} 

const flattenObject = (obj) => {
    let flattenedObj = {};
    for(const key in obj) {
        if(typeof obj[key] === 'object') {
            if(!Array.isArray(obj[key])) {
                const temp = flattenObject(obj[key]);
    			for (const newKey in temp) {
    				flattenedObj[key + '.' + newKey] = temp[newKey];
    			}
            } else {
                flattenedObj[key] = flattenArray(obj[key]); // already uploaded on my repository
            }
        } else {
            flattenedObj[key] = obj[key];
        }   
    }
    return flattenedObj;
}

console.log(flattenObject(obj));
