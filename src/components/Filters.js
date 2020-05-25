import React, { useState } from 'react';
import { ContactFilterCriteriaEnum as CriteriaEnum} from '../common/common';

function Filters ({orderContactsByAttribute, filterContactsByName, filterCriteria, setFilterCriteria}) {

  function handleFilterChange({ searchCriteria=undefined, orderCriteria={attribute:undefined, isDate:false} }) {
    if(orderCriteria.attribute) {
      orderContactsByAttribute(orderCriteria);
      setFilterCriteria(orderCriteria.attribute);
    }

    if(searchCriteria !== undefined && (searchCriteria.length >= 3 || searchCriteria.length === 0)) {
      filterContactsByName(searchCriteria);
    }
  }

  return (
    <div className="container" data-testid="filters"> 
      <section className="filters">
        <div className="filters__search">
          <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={(e)=> handleFilterChange({searchCriteria: e.target.value})}/>

          <button className="filters__search__icon">
            <i className="fa fa-search"/>
          </button>                  
        </div>

        <button className={"filters__item " + (filterCriteria === CriteriaEnum.NAME && 'is-selected')} onClick={ ()=> handleFilterChange({ orderCriteria: {attribute: CriteriaEnum.NAME}}) }>
          Nome <i className="fas fa-sort-down" />
        </button>

        <button className={"filters__item " + (filterCriteria === CriteriaEnum.COUNTRY && 'is-selected')} onClick={ ()=> handleFilterChange({ orderCriteria: {attribute:CriteriaEnum.COUNTRY}}) }>
          País <i className="fas fa-sort-down" />            
          </button>
        <button className={"filters__item " + (filterCriteria === CriteriaEnum.COMPANY && 'is-selected')} onClick={ ()=> handleFilterChange({ orderCriteria:{attribute: CriteriaEnum.COMPANY}}) }>
          Empresa <i className="fas fa-sort-down" />
        </button>

        <button className={"filters__item " + (filterCriteria === CriteriaEnum.DEPARTMENT && 'is-selected')} onClick={ ()=> handleFilterChange({ orderCriteria: {attribute: CriteriaEnum.DEPARTMENT}}) }>
          Departamento <i className="fas fa-sort-down" />
        </button>

        <button className={"filters__item " + (filterCriteria === CriteriaEnum.ADMISSION && 'is-selected')} onClick={ ()=>handleFilterChange({ orderCriteria: {attribute: CriteriaEnum.ADMISSION, isDate:true}}) }>
          Data de admissão <i className="fas fa-sort-down" />
        </button>
      </section>
    </div>

  );
}

export default Filters;
