import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const EssentialsContext = createContext();

const EssentialsContextProvider = (props) => {

    const[data, setData] = useState([])

    const[visible, setVisible] = useState([]);

    const[states, setStates] = useState(["All States"]);

    const[cities, setCities] = useState(["All Cities"]);
    //
    const[categories, setCategories] = useState(["All Categories"]);

    const[selected, setSelected] = useState(["All States","All Cities","All Categories"]);

    // const fun = () =>{
    //     console.log(states[4610]);
    //     // const temp = states[4610];
    //     // console.log(temp);
    //     // setStates(temp);
    //     // console.log(states);
    // }


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.covid19india.org/resources/resources.json',
            );

            setData(result.data.resources);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let str = "";
        let temp =[];
        data.map(org => {
            if(org.state!== str){
                str = org.state;
                temp = [...temp,str];
                return temp;
            }
            return "";
        });
        setStates([...states,...temp]);
        // if(data.length>0){
        //     setSelected(["Bihar",...selected]);
        // }

    },[data]);

    useEffect(() => {
        if(selected[0]!=="All States"){
            let str = "";
            let temp=[];
            // if(data.length!==0){
                data.map(org => {
                    if(org.state === selected[0]){
                        if(org.city!==str) {
                            str = org.city;
                            temp = [...temp, str];
                            return temp;
                        }
                    }
                    return "";
                });
            temp = sorter(temp);

            setCities(["All Cities",...temp]);
            // }
        }
        if(selected[0]==="All States"){
            setCities(["All cities"]);
        }
        setCategories(["All Categories"]);
        InputChangeHandler(1,"All Cities");
        InputChangeHandler(2,"All Categories");
    },[selected[0]])

    useEffect(() => {
        if(selected[1]!=="All Cities" && cities.length>1){
            let str = "";
            let temp = [];
            data.map(org => {
                if(org.state===selected[0]){
                    if(org.city===selected[1]) {
                        if(org.category!==str){
                            str = org.category;
                            temp = [...temp, str];
                            return temp;
                        }
                    }
                }
            })
            temp = sorter(temp);
            setCategories(["All Categories",...temp]);
        }
        if(selected[1]==="All Cities"){
            setCategories(["All Categories"]);
        }
        InputChangeHandler(2,"All Categories");
    },[selected[1]])

    // const StateChangeHandler = (event) => {
    //     console.log(event);
    // }

    const sorter = (obj) => {
        obj.sort((a,b) => {
            return a<b ? -1 : 1;
        });
        let array = [];
        let str = "";
        obj.map(o => {
            if(o!==str){
                str = o;
                array = [...array,str];
                return array;
            }
            return "";
        })
        return array;
    }

    const InputChangeHandler = (index,str) => {
        const temp = [...selected];
        temp[index] = str;
        setSelected([...temp]);
    }

    const SubmitHandler = () => {
        let temp = [];
        data.map(obj => {
            if(selected[0]==="All States"){
                temp = [...temp,obj];
            }
            else{
                if(obj.state===selected[0]){
                    if(selected[1]==="All Cities"){
                        temp = [...temp,obj];
                    }
                    else{
                        if(obj.city===selected[1]){
                            if(selected[2]==="All Categories"){
                                temp = [...temp,obj];
                            }
                            else{
                                if(obj.category===selected[2]){
                                    temp = [...temp,obj];
                                }
                            }
                        }
                    }
                }
            }
        });
        setVisible([...temp]);

    }


    return (
        <EssentialsContext.Provider value={{data,states,cities,categories,selected,visible,InputChangeHandler,SubmitHandler}}>
            {props.children}
        </EssentialsContext.Provider>
    );
}

export default EssentialsContextProvider;
