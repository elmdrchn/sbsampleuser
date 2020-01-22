import 'semantic-ui-css/semantic.min.css';
import { Grid } from "semantic-ui-react"
import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { SideBar } from './components/SideBar'
import { Footer } from './components/Footer'
import { MainPage } from './components/MainPage'

function App() {
    return (
        <div>
            <div>
                <NavBar/>
                <SideBar/>
                <MainPage />
                <Footer/>
            </div>
            
            

            {/* <Grid>
                <Grid.Row style={{ paddingBottom: 0 }}>
                    <Grid.Column>
                        <NavBar />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 0, paddingBottom: 0 }}>
                    <Grid.Column style={{ paddingRight: 0 }}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={15} style={{}}>
                        <MainPage />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: 0 }}>
                    <Grid.Column>
                        <Footer />
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}
        </div>
    );
}

export default App;
