import React from 'react'
import { List as MUIList, ListItem, ListeItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, ListItemAvatar } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  const transactions = [
    {id: 1, type: "Income", category: 'Salary', amount: 50, date: new Date() }
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
            <ListItemAvatar>
              <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List
