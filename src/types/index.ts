import React from "react";

export type ModalProps = {
    children: React.ReactNode
    active: boolean;
    setActive: (e:boolean) => void;
}



