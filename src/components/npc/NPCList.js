import { useState } from 'react'

import { NPC } from './NPC'
import FloatingMenu from '../ui/FloatingMenu';
import AddNPCModal from './AddNPCModal'

const NPCList = () => {

    const [modalShow, setModalShow] = useState(false);
    const [npcs, setNpcs] = useState();

    const handleDeleteNpc = (id) => {
        setNpcs(() => npcs.filter(npc => npc.id !== id))
    }

    const toggleModal = (display) => {
        console.log("display = " + display);
        setModalShow(display);
    }

    return (
        <div>
            <p>NPCs</p>
            <FloatingMenu action={toggleModal} />

            <AddNPCModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>
    )
}

export default NPCList
