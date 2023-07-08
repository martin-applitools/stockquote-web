import React from "react";
import { ActionButtons } from "../../components/ActionButtons";
import { formatNumber } from "../../utils/Utils";

export const Account = (props) => {

    const {type, accountNumber, balance, fullname, editingUser, setEditingUser, setDeleteUser, index, isAdmin, setEditModal} = props;

    const action = isAdmin ? <ActionButtons index={index}
                                            editingUser={editingUser}
                                            setEditingUser={setEditingUser}
                                            setEditModal={setEditModal} setDeleteUser={setDeleteUser} /> : '';

    return (
        <div className="account">
            <div className="details">
                <AccountHolder fullname={fullname} />
                <AccountType type={type} />
                <AccountNumber accountNumber={accountNumber} />
                {action}
            </div>
            <AccountBalance balance={formatNumber(balance)} />
        </div>
    )
}

export const AccountHolder = (props) => {
    return (
        <div>{props.fullname}</div>
    )
}


export const AccountType = (props) => {
    return (
        <div>{props.type}</div>
    )
}


export const AccountNumber = (props) => {
    return (
        <div>{props.accountNumber}</div>
    )
}


export const AccountBalance = (props) => {
    const balance = props.balance;
    return (
      <div className={"balance"}>{balance}</div>
    )
  }

