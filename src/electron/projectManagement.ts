import { dialog } from 'electron'
import { writeFileSync, readFileSync} from 'fs'
import { ProjectFile } from 'ProjectFile'

function openProject() {
    console.log('Opening Project')
    const filePath =  dialog.showOpenDialogSync({properties: [
        'openFile'
    ],
    filters: [
        {
            name: 'lightshow project file',
            extensions: ['lspg']
        }
    ]})
    try{
        readFileSync(filePath.at(0))
    }
    catch(ex){
        console.warn(`Could not read file at ${filePath}, enusre no other processes are using it and the application has permissions to open it.`)
        console.error(ex)
    }
}

function createNewProject() {
    const filePath = dialog.showSaveDialogSync({properties: [
        'createDirectory'
    ],
    filters: [
        {
            name: 'lightshow project file',
            extensions: ['lspg']
        }
    ]})
    try{
        writeFileSync(filePath, "")
    }
    catch (ex) {
        console.warn(`Could not create a project at ${filePath}, this is most likely becuase the application does not have permission to write here, try a different path.`)
        console.error(ex)
    }
}

function saveProject () {
    try{
        //writeFileSync(loadedProjectPath, "")
    }
    catch (ex) {
        //console.log(`Could not create a project at ${loadedProjectPath}, this is most likely becuase the application does not have permission to write here, try a different path.`)
        console.error(ex)
    }
}

async function saveProjectAs () {
    createNewProject()
}

export { openProject, createNewProject, saveProject, saveProjectAs }