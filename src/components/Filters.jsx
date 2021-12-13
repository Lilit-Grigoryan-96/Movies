import React from 'react'
import {useState} from "react";
import classes from "./components.module.scss";
import { DatePicker, Space, Slider, Select } from 'antd';
import {genres, fetchMovieByFilter} from "../pages/index";
import useData from "../hooks/useData";


const { RangePicker } = DatePicker;

const Filters = ({setFilterMovies, movieUrl}) => {

    const [searchChecked, setSearchChecked] =useState(true);
    const certification = ['NR', 'G', 'PG', 'PG-13', 'R', 'NC-17'];
    const [genreArg,setgenreArg] = useState([]);
    const [dateArg, setDateArg] = useState(['2021-06-01', '2022-01-01']);
    const [runtimeArg, setrRuntimeArg] = useState(['0', '360']);
    const [certificationArg, setCertificationArg] = useState([]);
    const [userScoreVal, setUserScoreVal] = useState('');
    const [language, setLanguage] = useState('en');
   
    let genre = useData(genres);

    const marks = {
        0: '0',
        5: '5',
        10: '10',
    };
    const marks_runtime = {
        0: '0',
        120: '120',
        240: '240',
        360: '360',
    };
    function onChange(value, dateString) {
        setDateArg(dateString);
    }
    function handleChangeRunTime(value) {
        setrRuntimeArg(value);
    }
    function handleChange(value) {
        setUserScoreVal(value);
    }

    let checkedArr=[
        {id:1, name:'Stream', checked:!searchChecked,  value: 'flatrate' },
        {id:2, name:'Free', checked:!searchChecked,  value: 'free' },
        {id:3, name:'Ads', checked:!searchChecked,  value: 'ads' },
        {id:4, name:'Buy', checked:!searchChecked,  value: 'rent' },
    ];
    const [chInput, setChInput] = useState(checkedArr);

    function toggleClick(id) {
        setChInput(
            chInput.map(item=>{
                if(item.id===id){
                    item.checked=!item.checked;
                }
                return item;
            })
        )
    }
    const { Option, OptGroup } = Select;

    function handleChangeLang(value) {
        setLanguage(value);

    }
    const filter =  async ()=>{

        let checkedArr=[];
        if(!searchChecked){
            chInput.forEach((el) =>{
                if(el.checked){
                    checkedArr.push(el.value)
                }
            } );
        }

        setFilterMovies(await fetchMovieByFilter(movieUrl, genreArg.join(','), checkedArr.join(','),
            dateArg[0], dateArg[1], certificationArg.join(','),userScoreVal[0],userScoreVal[1],language,
            runtimeArg[0], runtimeArg[1]));
            setgenreArg([]);
            setCertificationArg([]);
            let activeBtn=document.querySelectorAll('.active_btn');
            activeBtn.forEach(el => el.classList.remove('active_btn'));

    };

    const handleGenreClick = (genre_id, name) => {

        setgenreArg([...genreArg,genre_id]);
        document.querySelector('.'+name).classList.toggle('active_btn');

    };
    const handleCertificationArgClick= ( el) => {

        setCertificationArg([...certificationArg, el]);
        document.querySelector('.' + el).classList.toggle('active_btn');
    };


    return (

        <div className={classes.filter_box}>
           <h2>Filters </h2>
           <div className={classes.checkbox_filter}>
               <div className={classes.filter_row}>
                   <h3>Availabilities</h3>
                   <label>
                        <input type="checkbox" checked={searchChecked} onChange={() => setSearchChecked(!searchChecked)}/>
                        Search all availabilities?
                    </label>

                   <div className={searchChecked ? 'd-none' :"d-flex flex-column"}>
                           {
                               chInput.map((el,ind)=>{
                                   return (
                                       <label key={ind}>
                                           <input type="checkbox" name={el.name} checked={el.checked}
                                                  onChange={() => toggleClick(el.id)} />
                                           {el.name}
                                       </label>
                                   )
                               })

                           }
                   </div>
                </div>
           </div>
            <div className={classes.filter_row}>
                <Space direction="vertical" size={12}>
                    <RangePicker
                    format="YYYY-MM-DD"
                    onChange={onChange}
                    />
                </Space>
            </div>
            <div className={classes.filter_row}>
                <h3>Genres</h3>
                <ul className={classes.filter_buttons}>
                    {
                        genre.map((el, ind)=>{
                            return (
                            <li className={`${classes.filter_buttons_item} ${el.name}`} key={el+'_'+ind}
                                onClick={(e) => { handleGenreClick(el.id, el.name);}}>{el.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={classes.filter_row}>
                <h3>Language</h3>
                <Select style={{ width: 200 }} onChange={handleChangeLang}>
                    <OptGroup label="Manager">
                        <Option value="en">English</Option>
                        <Option value="hy">Armenian</Option>
                        <Option value="fr">French</Option>
                        <Option value="es">Spanish</Option>
                        <Option value="es">Italian</Option>
                        <Option value="it">German</Option>
                        <Option value="ru">Russian</Option>
                    </OptGroup>
                </Select>,
            </div>
            <div className={classes.filter_row}>
                <h3>Certification</h3>
                <ul className={classes.filter_buttons}>
                    {
                        certification.map((el, ind)=>{
                            return (
                                <li className={`${classes.filter_buttons_item} ${el}`}
                                    key={el+'_'+ind}  onClick={(e) => { handleCertificationArgClick(el);}}>{el}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={classes.filter_row}>
                <h3>User Score</h3>
                <Slider range marks={marks} min={0} max={10}  defaultValue={[0, 10]} onChange={handleChange}/>
            </div>
            <div className={classes.filter_row}>
                <h3>Runtime</h3>
                <Slider range marks={marks_runtime} min={0} max={360}  defaultValue={[0, 360]} onChange={handleChangeRunTime}/>
            </div>

            <button onClick={filter} className={classes.filter_btn}>Search</button>
        </div>
    );
}

export default Filters;