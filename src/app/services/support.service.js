import axios from "axios";
import React from 'react'
import { post } from "axios";

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const SUPPORT_TICKET = "api/supportticket";
export const API_SUPPORT_TICKET = "api/supportticket";
export const SUPPORT_TICKET_ATTACHMENT = "attachment";
export const SUPPORT_COMMENT = 'comment'

export const FILE_UPLOAD_URL = "api/fileupload";

///api/SupportTicket/Attachment/{SupportTicketCommentId}

export function getAllSupportTicket(){
    return axios.get(`${ROOT_URL}/${SUPPORT_TICKET}`);
}

export function getOpenSupportTicket(){
    return axios.get(`${ROOT_URL}/${SUPPORT_TICKET}/active`);
}

export function getClosedSupportTicket(){
    return axios.get(`${ROOT_URL}/${SUPPORT_TICKET}/closed`);
}

export function getTicketById(id){
    return axios.get(`${ROOT_URL}/${SUPPORT_TICKET}/${id}`);
}

export function saveNewTicketSupport(ticket){
    return axios.post(`${ROOT_URL}/${API_SUPPORT_TICKET}/`,ticket );
}

//attachment

export function saveAttachment(file) {
    return axios.post(`${ROOT_URL}/${SUPPORT_TICKET_ATTACHMENT}`, file);
}

export function getAttachment(id) {
    return axios.get(`${ROOT_URL}/${SUPPORT_TICKET_ATTACHMENT}/${id}`);
}

export function deleteAttachment(id){
    return axios.delete(`${ROOT_URL}/${API_SUPPORT_TICKET}/${SUPPORT_TICKET_ATTACHMENT}/${id}`)
}


//comment 

export function getCommentById(id) {
    return axios.get(`${ROOT_URL}/${SUPPORT_COMMENT}/${id}`)
}

export function saveComment(comment) {
    return axios.post(`${ROOT_URL}/${SUPPORT_COMMENT}`, comment)
}


// UPLOAD
const config = {
  'content-type': 'multipart/form-data',
}

export function requestFileUpload(file) {
    var formData = new FormData();
    
    const url = `${ROOT_URL}/${FILE_UPLOAD_URL}`;
    formData.append('files', file);
    return post(url, formData, config);

}