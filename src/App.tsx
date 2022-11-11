import React, {useState} from 'react'
import './App.css'
import {ITab, Tabs} from './components/Tabs';

const App = () => {
    const tabs: ITab[] = [
        {id: '1', label: 'Label #1'},
        {id: '2', label: 'Label #2'},
        {id: '3', label: 'Label #3'},
    ]

    const [selectedTabId, setSelectedTabId] = useState(tabs[0].id)

    const handleTabClick = (id: string | number) => {
        setSelectedTabId(id)
    }

    return (
        <div>
            <Tabs
                tabs={tabs}
                selectedId={selectedTabId}
                onClick={handleTabClick}
            />
            <div className={'TabsPage-Content'}>
                {selectedTabId === tabs[0].id && (
                    <div>
                        TAB 1
                    </div>
                )}
                {selectedTabId === tabs[1].id && (
                    <div>
                        TAB 2
                    </div>
                )}
                {selectedTabId === tabs[2].id && (
                    <div>
                        TAB 3
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;