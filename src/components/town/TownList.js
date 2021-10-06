import { useState, useEffect, useRef } from 'react'
import { Table } from 'react-bootstrap'

import Town from './Town'
import FloatingMenu from '../ui/FloatingMenu'
import AddTownModal from './AddTownModal'
import TownService from '../../services/TownService'
import FileService from '../../services/FileService'

const TownList = (props) => {
  const [towns, setTowns] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [exportDownloadURL, setExportDownloadURL] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    TownService.loadTowns()
      .then((value) => {
        console.log('In onLoad: ')
        setTowns(value)
      })
      .catch((err) => {
        alert(err)
      })
  }

  const handleSaveTown = (name, region) => {
    const tempTowns = [
      ...towns,
      { id: towns.length + 1, name: name, region: region },
    ]
    towns.forEach((town, index) => {
      town.id = index + 1
    })
    setTowns(tempTowns)
    TownService.saveTowns(tempTowns)
  }

  const handleDeleteTown = (id) => {
    const tempTowns = towns.filter((town) => town.id !== id)
    tempTowns.forEach((town, index) => {
      town.id = index + 1
    })
    console.log(tempTowns)
    setTowns(tempTowns)
    TownService.saveTowns(tempTowns)
  }

  const toggleModal = () => {
    console.log('display -> ' + !modalShow)
    setModalShow(!modalShow)
  }

  const handleExport = () => {
    console.log('export')
    FileService.exportAllToJson('text.json').then((fileUrl) => {
      setExportDownloadURL(fileUrl)
      inputRef.current.click()
    })
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
          {towns.map((town) => (
            <Town
              key={town.id}
              index={town.id}
              town={town}
              handleDeleteTown={handleDeleteTown}
            />
          ))}
        </tbody>
      </Table>
      <FloatingMenu toggleModal={toggleModal} handleExport={handleExport} />
      <AddTownModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSaveTown={handleSaveTown}
      />
      <a
        style={{ display: 'none' }}
        download='text.json'
        href={exportDownloadURL}
        ref={inputRef}
      >
        download
      </a>
    </div>
  )
}

export default TownList
