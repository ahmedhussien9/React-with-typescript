import React from "react";
interface IProps {
    people: {
        name: string;
        url: string;
        age: number;
        note: string;
    }[]
}

/**
 * React.FC<propsType> type tells react that it's a regular functional component. 
 * List component has people as props.
 * So we have to create an interface for the props which will be passed into the list. 
 * As you can see below that we had distructied the people array from the props. 
 * @param param0 
 * @returns 
 */
const List: React.FC<IProps> = ({ people }) => {

    /**
     * We have to define JSX.Element[] to tell react that we're gonna render a list of elements
     * It's for sure react will understand the type by itself by we have to hoverover the render list 
     * If you want to figure out the type of element. 
     *  @returns 
     */
    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
};

export default List;