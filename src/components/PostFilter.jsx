import React from 'react';
import MyInput from './Ui/input/MyInput';
import { MySelect } from './Ui/select/MySelect';

export const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
<MyInput
      placeholder='Поиск...'
      value={filter.query}
      onChange={e=> setFilter({...filter, query:e.target.value})}
     />
     <MySelect defaultValue='Сортировка' 
     value={filter.sort}
     onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
     options ={[{value: "title", name:"По названию"},
     {value: "body", name:"По описанию"}

     ]} />
		</div>
		
	)
}
