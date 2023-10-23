import {useEffect, useState} from "react";
import axios from "axios";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import {Button, InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./Browse.module.scss";

const Browse = () => {
    const [data, setData] = useState([]);
    const [listData, setListData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const renderListData = () => {
        if (listData?.length && listData) {
            return  filteredValue.map(listItem =>
                <li key={listItem.key}>{listItem.key}: {listItem.name}</li>
            )
        }
    }

    const renderTreeItems = (el) => (
        el?.filter(item => item?.children?.length)
            ?.map(item => (
            <TreeItem onClick={() => setListData(item.children)} className={styles.item} key={item.key} nodeId={item.key} label={item.name}>
                { item.children && renderTreeItems(item.children) }
            </TreeItem>
        ))
    );
    const handleSearchValueChange = e => setSearchValue(e.target.value);

    const filteredValue = listData?.filter(listItem => {
        return listItem.name.toLowerCase().includes(searchValue.toLowerCase());
    })

    const sortByName = () => {
        const sortedArray = [...filteredValue].sort((a, b) => {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
        setListData(sortedArray);
    };

    useEffect(() => {
        axios.get(`data/data.json`)
            .then((res) => {
                setData(res.data)
            })
    }, []);

    return (
        <div className={styles.content}>
            <TreeView
                aria-label="tree view data"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                {renderTreeItems(data)}
            </TreeView>
            <div className={styles.item}>
                <TextField
                    id="search"
                    type="search"
                    label="Search"
                    value={searchValue}
                    onChange={handleSearchValueChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button onClick={sortByName}>Сортировать по имени</Button>
                <ul>
                    {renderListData()}
                </ul>
            </div>
        </div>
    );
};

export default Browse;