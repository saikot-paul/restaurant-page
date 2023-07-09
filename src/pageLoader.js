import './components/style.css';
import { images, contactData, wordVomit, shortWordVomit } from './components/resources.js';

class PageLoader { 

    constructor() { 
        this.contentDiv = document.getElementById('content')
        this.gridContainer = null 
        this.homeContainer = null 
        this.menuContainer = null 
        this.contactContainer = null 
    }

    loadPage() { 
        this.createHeader()
        this.createSection('About', this.homeHelperFunc)
    }

    createHeader() { 
        const ids = ['home', 'menu', 'contact']
        const text = ['Home', 'Menu', 'Contact']
        const functions = [this.homeHelperFunc, this.menuHelperFunc, this.contactHelperFunc]

        const header = this.createDOMElement('div', 'header')
        ids.forEach( (element, index) => { 
            const btn = this.createDOMElement('button', null, {
                textContent: text[index], 
                eventListener: {eventType: 'click', func: functions[index], title: text[index]}
            })
            const div = this.createDOMElement('div', '${element}-btn-container', null, btn)
            
            header.appendChild(div)
        })

        this.contentDiv.appendChild(header)

        const mainContentDiv = this.createDOMElement('div', 'main-content', {id: 'main-content'})
        const title = this.createDOMElement('div', 'title', {id: 'title', textContent: 'About'})
        this.gridContainer = this.createDOMElement('div', 'grid-container', {id: 'grid-container'})
        
        mainContentDiv.appendChild(title)
        mainContentDiv.appendChild(this.gridContainer)

        this.contentDiv.appendChild(mainContentDiv)

    }

    createSection(titleText, contentFunc) {
        
        document.getElementById('title').textContent = titleText;

        const { homeContainer, menuContainer, contactContainer } =
            this.getContainers();

        if (contentFunc === this.homeHelperFunc && homeContainer !== null){ 
            return 
        }
        if (contentFunc === this.menuHelperFunc && menuContainer !== null) { 
            return 
        }
        if(contentFunc === this.contactHelperFunc && contactContainer !== null){
            return;
        }

        if (homeContainer) {
            this.gridContainer.removeChild(homeContainer);
        }

        if (menuContainer) {
            this.gridContainer.removeChild(menuContainer);
        }

        if (contactContainer) {
            this.gridContainer.removeChild(contactContainer);
        }

        const newContainer = contentFunc.call(this);
        this.gridContainer.appendChild(newContainer);
    
    }

    homeHelperFunc() { 

        const homeContainer = this.createDOMElement('div', 'home-container', {id: 'home-container'})

        const left = ['Who are we?', 'Culture', 'Cuisine']

        left.forEach( (element) => { 
            const leftDiv = this.createDOMElement('div', null, {textContent: element})
            const rightDiv = this.createDOMElement('div', null, {textContent: wordVomit})

            homeContainer.appendChild(leftDiv)
            homeContainer.appendChild(rightDiv)
        })



        return homeContainer
    }

    menuHelperFunc() { 

        const menuContainer = this.createDOMElement('div', 'menu-container', {id: 'menu-container'})
        const imgDesc = ['Avocado Toast', 'Hyderbadi Biryani', 'Chicken Burger', 'Omelette du Fromage'];

        images.forEach( (source, index) => { 

            const div = this.createDOMElement('div', 'menu-item')
            const img = new Image()
            img.src = source
            img.alt = imgDesc[index]

            const itemTitle = this.createDOMElement('div', 'menu-item-title')
            const descDiv = this.createDOMElement('div', 'description', {textContent: shortWordVomit})
        
            div.appendChild(img)
            div.appendChild(itemTitle)
            div.appendChild(descDiv)

            menuContainer.appendChild(div)
        })

        return menuContainer

    }

    contactHelperFunc() { 

        const contactContainer = this.createDOMElement('div', 'contact-container', {id: 'contact-container'})

        const map = this.createDOMElement('iframe', 'map-style', 
            {src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.2788756902514!2d-77.0588418235856!3d38.87186094820975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6df29ed2c27%3A0xaf83d0f8c013532f!2sThe%20Pentagon!5e0!3m2!1sen!2sca!4v1688754767684!5m2!1sen!2sca'})
        
        const contactDataContainer = this.createDOMElement('div', 'contact-data-container', null)
        
        for (let property in contactData) { 
            const value = contactData[property]
            const temp = this.createDOMElement('div', null, {textContent: `${property}: ${value}`})
            
            contactDataContainer.appendChild(temp)
        }

        contactContainer.appendChild(contactDataContainer)
        contactContainer.appendChild(map)

        return contactContainer
    }

    createDOMElement(tag, className, attributes, child) { 

        const element = document.createElement(tag)
        
        if (className) { 
            element.classList.add(className)
        }

        if (attributes) { 
            for (let attr in attributes) { 
                
                if (attr === 'eventListener'){ 
                    const {eventType, func, title} = attributes[attr]
                    element.addEventListener(eventType, ()=> { 
                        this.createSection(title, func)
                    })
                }else{
                    element[attr] = attributes[attr]
                }
            }
        }

        if (child) { 
            element.appendChild(child)
        }

        return element
    }

    getContainers () { 

        const homeContainer = document.getElementById('home-container')
        const menuContainer = document.getElementById('menu-container')
        const contactContainer = document.getElementById('contact-container')

        return {homeContainer, menuContainer, contactContainer}
    }
}

export {PageLoader}
