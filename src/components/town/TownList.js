import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import Town from './Town';
import FloatingMenu from '../ui/FloatingMenu';
import AddTownModal from './AddTownModal';
import townService from '../../services/townService'

const TownList = (props) => {

    const [towns, setTowns] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = () => {
        townService.loadTowns().then(value => {
            console.log("In onLoad: ");
            setTowns(value);
        }).catch(err => {
            alert(err);
        })
    }

    const handleSaveTown = (name, region) => {
        const tempTowns = [...towns, { id: towns.length + 1, name: name, region: region }];
        towns.forEach((town, index) => { town.id = index + 1 });
        setTowns(tempTowns);
        townService.saveTowns(tempTowns);
    }

    const handleDeleteTown = (id) => {
        const tempTowns = towns.filter(town => town.id !== id);
        tempTowns.forEach((town, index) => { town.id = index + 1 });
        console.log(tempTowns);
        setTowns(tempTowns);
        townService.saveTowns(tempTowns);
    }

    const toggleModal = (display) => {
        console.log("display = " + display);
        setModalShow(display);
    }

    return (
        <div>
            <p>Towns</p>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Town Name</th>
                        <th>Region</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {towns.map((town) => <Town key={town.id} index={town.id} town={town} handleDeleteTown={handleDeleteTown} />)}
                </tbody>
            </Table>
            <FloatingMenu action={toggleModal} />
            <AddTownModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleSaveTown={handleSaveTown} />
        </div>
    )
}

export default TownList
