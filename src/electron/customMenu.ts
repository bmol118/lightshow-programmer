import { Menu, MenuItem } from "electron"
import { openProject, createNewProject, saveProject, saveProjectAs } from "./projectManagement"

const fileSubmenu = [
    {
      label: 'Open Existing Project',
      click: openProject
    },
    { 
      label: 'Create New Project',
      click: createNewProject
    },
    { 
      label: 'Save Project',
      click: saveProject
    },
    { 
      label: 'Save as',
      click: saveProjectAs
    },
    { 
      label: 'Export Project',
      click: openProject,
    }
  ] as unknown as MenuItem[] // fixes dumb ts error
  
export const menuTemplate = [
    {
      label: "File",
      submenu: Menu.buildFromTemplate(fileSubmenu)
    }
  ] as MenuItem[]
  