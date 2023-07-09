import './components/style.css'
import avocado_toast from './components/images/avocado-toast.png'
import biryani from './components/images/biryani.png'
import burger from './components/images/burger.png'
import omelette from './components/images/omelette.png'
import data from './components/data/contact_info.json'




const wordVomit = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum purus id ex consectetur finibus. Nam bibendum diam eget metus rutrum, a faucibus nisl fringilla. Ut eleifend ultricies massa, sed suscipit risus tempor eget. Proin tincidunt libero a risus finibus condimentum. Mauris maximus, ortor vitae mattis ullamcorper, metus lectus dignissim lorem, id lobortis mi dui at lacus. Quisque bibendum ipsum non felis posuere tempus. Morbi consectetur dui eget mi rhoncus, vel viverra justo rutrum"
const shortWordVomit = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum purus id ex consectetur finibus. Nam bibendum diam eget metus rutrum, a faucibus nisl fringilla."
const images = [avocado_toast, biryani, burger, omelette]

export default function loadPage() { 
    
    createHeader()   
    createHome()
    
}

function homeBtnFunc() { 
    createHome()
}

function createHeader() {
    
    const ids = ['home', 'menu', 'contact']
    const text = ['Home', 'Menu', 'Contact'] 
    const functions = [homeBtnFunc, menuBtnFunc, contactBtnFunc]

    const content_div = document.getElementById('content')
    const header = document.createElement('div')
    header.classList.add('header')

    ids.forEach( (element, index) => { 

        let btn = document.createElement('button')
        btn.id = element 
        btn.textContent = text[index]
        btn.addEventListener('click', functions[index])


        let div = document.createElement('div')
        div.classList.add(element+'-btn-container')
        div.appendChild(btn)

        header.appendChild(div)
    }) 

    content_div.appendChild(header)
    
    const main_content_div = document.createElement('div')
    main_content_div.classList.add('main-content')
    main_content_div.id = 'main-content'
    
    const title = document.createElement('div')
    title.classList.add('title')
    title.id = 'title'
    title.textContent = "About"

    const grid_container = document.createElement('div')
    grid_container.classList.add('grid-container')
    grid_container.id = 'grid-container'

    main_content_div.appendChild(title)
    main_content_div.appendChild(grid_container)
    
    content_div.appendChild(main_content_div)
}

function createHome() { 

    document.getElementById('title').textContent = 'About'
    const grid_container = document.getElementById('grid-container')

    const { home_container, menu_container, contact_container } = getContainers()

    if (home_container !== null) { 
        return
    }
    
    if (menu_container !== null) { 
        grid_container.removeChild(menu_container)
    }

    if (contact_container !== null) { 
        grid_container.removeChild(contact_container)
    }
    

    grid_container.appendChild(homeHelperFunc())

}


function homeHelperFunc() { 
    const home_container = document.createElement('div')
    home_container.classList.add('home-container')
    home_container.id = 'home-container'
    
    const left = ['Who are we?', 'Culture', 'Cuisine']

    left.forEach( (element) => { 
        let left_div = document.createElement('div')
        let right_div = document.createElement('div')
        
        left_div.textContent = element
        right_div.textContent = wordVomit
        
        home_container.appendChild(left_div)
        home_container.appendChild(right_div)
    })
    
    return home_container
}


function menuBtnFunc() { 
    createMenu()
}

function createMenu() { 
    
    document.getElementById('title').textContent = 'Menu'
    const grid_container = document.getElementById('grid-container')

    const { home_container, menu_container, contact_container } = getContainers()

    if (menu_container !== null) { 
        return
    }
    
    if (home_container !== null) { 
        grid_container.removeChild(home_container)
    }

    if (contact_container !== null) { 
        grid_container.removeChild(contact_container)
    }

    grid_container.appendChild(menuHelperFunc())
}

function menuHelperFunc() { 

    const menu_container = document.createElement('div')
    menu_container.classList.add('menu-container')
    menu_container.id = 'menu-container'

    const img_desc = ['Avocado Toast', 'Hyderbadi Biryani', 'Chicken Burger', 'Omelette du Fromage']

    images.forEach( (source, index) => { 

        const div = document.createElement('div')
        div.classList.add('menu-item')

        const img = new Image()
        img.src = source
        img.alt = img_desc[index]

        const item_title = document.createElement('div')
        item_title.classList.add('menu-item-title')
        item_title.textContent = img_desc[index]

        const desc_div = document.createElement('div')
        desc_div.classList.add('description')
        desc_div.textContent = shortWordVomit

        div.appendChild(img)
        div.appendChild(item_title)
        div.appendChild(desc_div)

        menu_container.appendChild(div)
    })

    return menu_container

}

function contactBtnFunc() { 
    createContact()
}

function createContact() { 
    document.getElementById('title').textContent = 'Contact'
    const grid_container = document.getElementById('grid-container')
    
    const { home_container, menu_container, contact_container } = getContainers()
    
    if (contact_container !== null) { 
        return
    }
    
    if (home_container !== null) { 
        grid_container.removeChild(home_container)
    }
    
    if (menu_container !== null) { 
        grid_container.removeChild(menu_container)
    }
    
    grid_container.appendChild(contactHelperFunc())
}

function contactHelperFunc() { 

    const contact_container = document.createElement('div')
    contact_container.classList.add('contact-container')
    contact_container.id = 'contact-container'

    const map = document.createElement('iframe')
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.2788756902514!2d-77.0588418235856!3d38.87186094820975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6df29ed2c27%3A0xaf83d0f8c013532f!2sThe%20Pentagon!5e0!3m2!1sen!2sca!4v1688754767684!5m2!1sen!2sca"  
    map.classList.add('map-style')
    map.id = 'map'
    
    const c_data = data.contact 
    const contact_data_container = document.createElement('div')
    contact_data_container.classList.add('contact-data-container')
    contact_data_container.id = 'contact-data-container'
    
    for (let property in c_data) { 
        const value = c_data[property]
        const temp = document.createElement('div')
        temp.textContent = property + " : " + value
        
        contact_data_container.appendChild(temp)
    }
    
    contact_container.appendChild(contact_data_container)
    contact_container.appendChild(map)
    
    return contact_container
}

function getContainers() {
    const menu_container = document.getElementById('menu-container')
    const contact_container = document.getElementById('contact-container')
    const home_container = document.getElementById('home-container')
    return { home_container, menu_container, contact_container }
}