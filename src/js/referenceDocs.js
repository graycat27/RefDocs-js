/**
 * Copyright (C) yui-Kitamura 2022
 * https://yui-kitamura.eng.pro
 *
 * referenceDocs-js
 * version 0.1 released on 2022.03.04.
 * This provide reference documents list for your HTML document.
 *
 * usage
 * <p>it says <q data-doc-id="bookSource" data-doc-pages="p.27">quoted document</q>.
 * The other one said, <blockquote doc-id="webSource">document ..long.. quoted.</blockquote>
 * But the other says <q data-doc-id="otherSource" data-doc-pages="p.72">quote tag is good</q>.</p>
 * <ref-doc>
 *    <ref-doc-id>bookSource</ref-doc-id>
 *    <ref-doc-name>document name</ref-doc-name>
 *    <ref-doc-author>who write it</ref-doc-author>
 *    <ref-book-publisher>published by</ref-book-publisher>
 *    <ref-book-published-date>2022/03/02</ref-book-published-date>
 * </ref-doc>
 * <ref-doc>
 *    <ref-doc-id>webSource</ref-doc-id>
 *    <ref-doc-name>web page name</ref-doc-name>
 *    <ref-doc-author>who write it</ref-doc-author>
 *    <ref-web-link>https://yui-kitamura.eng.pro/hoge</ref-web-link>
 *    <ref-web-visited-date>2022/03/04</ref-web-visited-date>
 * </ref-doc>
 * <ref-doc-list>
 *    <ref-doc>
 *       <ref-doc-id>otherSource</ref-doc-id>
 *       <ref-doc-name>other document name</ref-doc-name>
 *       <ref-doc-author>writer name</ref-doc-author>
 *       <ref-book-publisher>published by</ref-book-publisher>
 *       <ref-book-published-date>2022/03/11</ref-book-published-date>
 *    </ref-doc>
 * </ref-doc-list>
 */
class RefDocTag extends HTMLElement {
    tagName(){
        return 'ref-doc';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocTagFunc(this);
    }
}
class RefDocIdTag extends HTMLElement {
    tagName(){
        return 'ref-doc-id';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocIdTagFunc(this);
    }
}
class RefDocNameTag extends HTMLElement {
    tagName(){
        return 'ref-doc-name';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocNameTagFunc(this);
    }
}
class RefDocAuthorTag extends HTMLElement {
    tagName(){
        return 'ref-doc-author';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocAuthorTagFunc(this);
    }
}
class RefBookPublisherTag extends HTMLElement {
    tagName(){
        return 'ref-book-publisher';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPublisherTagFunc(this);
    }
}
class RefBookPublishedDateTag extends HTMLElement {
    tagName(){
        return 'ref-book-published-date';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPublishedDateTagFunc(this);
    }
}
class RefWebLinkTag extends HTMLElement {
    tagName(){
        return 'ref-web-link';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refWebLinkTagFunc(this);
    }
}
class RefWebVisitedDateTag extends HTMLElement {
    tagName(){
        return 'ref-web-visited-date';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refWebVisitedDateTagFunc(this);
    }
}

class RefDocListTag extends HTMLElement {
    tagName(){
        return 'ref-doc-list';
    }

    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocListTagFunc(this);
    }
}

let referenceDocs = (function () {
    'use strict';
    let val = {
        emptyDocInfo() {
            return {
                docId: null,
                docName: null,
                docAuthor: null,
                docPublisher: null,
                docPubDate: null,
                docLink: null,
                docVisitedDate: null
            }
        },
        emptyRefInfo(){
            return {
                refNo: null,
                docId: null,
                docPages: null
            }
        },

        _docInfoList: [],
        hasSameIdInfo(refId){
            for(let i=0; i<val._docInfoList.length; i++){
                if(val._docInfoList[i].docId === refId){
                    return true;
                }
            }
            return false;
        },
        addInfo(refId, docName, docAuthor, docPublisher, docPubDate, docLink, docVisitedDate){
            let docInfo = val.emptyDocInfo();

            const isNewInfo = !val.hasSameIdInfo(refId);
            if(!isNewInfo){
                docInfo = val.getDocInfo(refId)
            }

            if(docInfo.docId == null){
                docInfo.docId = refId;
            }
            if(docInfo.docName == null){
                docInfo.docName = docName;
            }
            if(docInfo.docAuthor == null){
                docInfo.docAuthor = docAuthor;
            }
            if(docInfo.docPublisher == null){
                docInfo.docPublisher = docPublisher;
            }
            if(docInfo.docPubDate == null){
                docInfo.docPubDate = docPubDate;
            }
            if(docInfo.docLink == null){
                docInfo.docLink = docLink;
            }
            if(docInfo.docVisitedDate == null){
                docInfo.docVisitedDate = docVisitedDate;
            }

            if(isNewInfo){
                if(docInfo.docId != null){
                    val._docInfoList.push(docInfo);
                }
            }else{
                const infoIdx = val._getInfoIndex(docInfo.docId);
                val._docInfoList[infoIdx] = docInfo;
            }
        },
        _getInfoIndex(refId){
            const docIdx = val._docInfoList.findIndex((info)=>(info.docId == refId));
            if(docIdx < 0){
                return null;
            }else{
                return docIdx;
            }
        },
        getDocInfo(refId){
            if(val.hasSameIdInfo(refId)){
                const docInfo = val._docInfoList.find((info)=>(info.docId == refId));
                return {
                    docId: docInfo.docId,
                    docName: docInfo.docName,
                    docAuthor: docInfo.docAuthor,
                    docPublisher: docInfo.docPublisher,
                    docPubDate: docInfo.docPubDate,
                    docLink: docInfo.docLink,
                    docVisitedDate: docInfo.docVisitedDate
                }
            }else{
                return null;
            }
        },
        /** 参照箇所のマーキングに使うID */
        _idPrefix(){
            return 'refDoc-refId-';
        },
        _refCnt: 1,
        getCurrentReferenceCount(){
            return val._refCnt - 1;
        },
        _referenceList: [],
        addReference(docId, pages){
            if(!(docId == null || docId == '')){
                let ref = val.emptyRefInfo();
                ref.refNo = val._refCnt;
                ref.docId = docId;
                ref.docPages = pages;
                val._referenceList.push(ref);
                val._refCnt += 1;
                return ref.refNo;
            }
            return null;
        },
        getReference(docId){
            let references = [];
            val._referenceList.forEach((reference)=>{
                if(reference.docId == docId){}
                    let ref = val.emptyRefInfo();
                    ref.refNo = reference.refNo;
                    ref.docId = reference.docId;
                    ref.docPages = reference.docPages;
                    references.push(ref);
                }
            );
            return references;
        },
        getAllReference(){
            let references = [];
            val._referenceList.forEach((reference)=>{
                let ref = val.emptyRefInfo();
                ref.refNo = reference.refNo;
                ref.docId = reference.docId;
                ref.docPages = reference.docPages;
                references.push(ref);
            });
            return references;
        }
    };

    let fn = {

        init(){
            val._refCnt = 1;
            val._docInfoList = [];
            val._referenceList = [];
        },

        define(){
            customElements.define(RefDocTag.prototype.tagName(), RefDocTag);
            customElements.define(RefDocIdTag.prototype.tagName(), RefDocIdTag);
            customElements.define(RefDocNameTag.prototype.tagName(), RefDocNameTag);
            customElements.define(RefDocAuthorTag.prototype.tagName(), RefDocAuthorTag);
            customElements.define(RefBookPublisherTag.prototype.tagName(), RefBookPublisherTag);
            customElements.define(RefBookPublishedDateTag.prototype.tagName(), RefBookPublishedDateTag);
            customElements.define(RefWebLinkTag.prototype.tagName(), RefWebLinkTag);
            customElements.define(RefWebVisitedDateTag.prototype.tagName(), RefWebVisitedDateTag);
            customElements.define(RefDocListTag.prototype.tagName(), RefDocListTag);
        },

        // custom tags actions
        refDocTagFunc(thisElement){

            let childrenNodes = thisElement.childNodes;
            let docInfo = val.emptyDocInfo();
            childrenNodes.forEach((node)=>{
                const nodeName = node.nodeName.toUpperCase();
                if(RefDocIdTag.prototype.tagName().toUpperCase() === nodeName){
                    docInfo.docId = node.textContent;
                    return;
                }
                if(RefDocNameTag.prototype.tagName().toUpperCase() === nodeName){
                    docInfo.docName = node.textContent;
                    return;
                }
                if(RefDocAuthorTag.prototype.tagName().toUpperCase() === nodeName){
                    docInfo.docAuthor = node.textContent;
                    return;
                }
                if(RefBookPublisherTag.prototype.tagName().toUpperCase() === nodeName){
                    docInfo.docPublisher = node.textContent;
                    return;
                }
                if(RefBookPublishedDateTag.prototype.tagName().toUpperCase() === nodeName){
                    docInfo.docPublishedDate = node.textContent;
                    return;
                }
                if(RefWebLinkTag.prototype.tagName().toUpperCase() === nodeName){
                    docInfo.docLink = node.textContent;
                    return;
                }
                if(RefWebVisitedDateTag.prototype.tagName().toUpperCase() === nodeName){
                    docInfo.docVisitedDate = node.textContent;
                    return;
                }
            });

            console.dir(docInfo);

            val.addInfo(docInfo.docId, docInfo.docName, docInfo.docAuthor,
                docInfo.docPublisher, docInfo.docPubDate, docInfo.docLink, docInfo.docVisitedDate);

        },
        refDocIdTagFunc(){

        },
        refDocNameTagFunc(){

        },
        refDocAuthorTagFunc(){

        },
        refBookPublisherTagFunc(){

        },
        refBookPublishedDateTagFunc(){

        },
        refWebLinkTagFunc(){

        },
        refWebVisitedDateTagFunc(){

        },
        refDocListTagFunc(){

        },

        referenceCollection(){
            let quoteElements = document.querySelectorAll('q[data-doc-id],blockquote[data-doc-id],ref-doc-list');
            const refDocListTagName = RefDocListTag.prototype.tagName().toUpperCase();
            quoteElements.forEach((ele)=>{
                if(ele.nodeName.toUpperCase() == refDocListTagName){
                    fn.markListPosition(ele);
                }else{
                    fn.addNewReference(ele);
                }
            });

        },

        addNewReference(ele){
            const attrDocId = ele.dataset.docId;
            const attrDocPages = ele.dataset.docPages;
            let refInfo = val.emptyRefInfo();
            refInfo.docId = attrDocId;
            refInfo.docPages = attrDocPages;

            const refNum = val.addReference(refInfo.docId, refInfo.docPages);
            if(refNum){
                ele.dataset.refNum = refNum;
            }
        },

        markListPosition(ele){
            ele.dataset.refNum = val.getCurrentReferenceCount();
        },

    };

    return {
        val: val,
    	fn: fn
    };
}());

window.addEventListener('DOMContentLoaded', function(){
    referenceDocs.fn.init();
    referenceDocs.fn.define();
    referenceDocs.fn.referenceCollection();
});
