import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Java from './Java'
import JavaScript from './JavaScript'
import Pyhton from './Pyhton'

export default function Programs() {
    return (
        <div>
            <h1>Programing Languages</h1>
            <BrowserRouter>
                <nav>
                    <ul>
                        
                        <li>
                            <Link to="/Programs/java">Java</Link>
                        </li>
                        <li>
                            <Link to="/Programs/JavaScript">JavaScript</Link>
                        </li>
                        <li>
                            <Link to="/Programs/Pyhton">Pyhton</Link>
                        </li>
                    </ul>
                </nav>
                <hr />

                <Switch>
                    <Route path='/Programs/java' component={Java} />
                    <Route path='/Programs/javaScript' component={JavaScript} />
                    <Route path='/Programs/Pyhton' component={Pyhton} />
                </Switch>


            </BrowserRouter>
        </div>
    )
}

