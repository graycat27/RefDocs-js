/**
 * Copyright (C) yui-Kitamura 2022
 * https://yui-kitamura.eng.pro
 *
 * referenceDocs-js
 * version 0.1 released on 2022.03.04.
 * This provide reference documents list for your HTML document.
 *
 * usage
 * <p>it says "quoted document"<ref-doc doc-id="bookSource" doc-pages="p.27"></ref-doc>.
 * Also the other one says "document quoted"<ref-doc doc-id="webSource"></ref-doc>.</p>
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
 * <ref-doc-list></ref-doc-list>
 */
class RefDocTag extends HTMLElement {
    constructor(){
        super();
        let shadow = this.attachShadow({mode: 'open'});
        let styleEle = document.createElement('style');
        styleEle.textContent = `
            <!-- no style defined -->
        `;
        const slotEle = document.createElement('slot');

        shadow.appendChild(styleEle);
        shadow.appendChild(slotEle);
    }

    connectedCallback(){
        referenceDocs.fn.refDocTagFunc(this);
    }
}
class RefDocIdTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocIdTagFunc(this);
    }
}
class RefDocNameTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocNameTagFunc(this);
    }
}
class RefDocAuthorTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocAuthorTagFunc(this);
    }
}
class RefBookPublisherTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPublisherTagFunc(this);
    }
}
class RefBookPublishedDateTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPublishedDateTagFunc(this);
    }
}
class RefBookPagesTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPagesTagFunc(this);
    }
}
class RefWebLinkTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refWebLinkTagFunc(this);
    }
}
class RefWebVisitedDateTag extends HTMLElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refWebVisitedDateTagFunc(this);
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
            _docInfoList.forEach((info)=>{
                if(info.docId == refId){
                    return true;
                }
            });
            return false;
        },
        addInfo(refId, docName, docAuthor, docPublisher, docPubDate, docLink, docVisitedDate){
            let docInfo = val.emptyDocInfo();

            const isNewInfo = !hasSameIdInfo(refId);
            if(!isNewInfo){
                docInfo = getInfo(refId)
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
                _docInfoList.push(docInfo);
            }else{
                const infoIdx = _getInfoIndex(docInfo.docId);
                _docInfoList[infoIdx] = docInfo;
            }
        },
        _getInfoIndex(refId){
            const docIdx = _docInfoList.findIndex((info)=>(info.docId == refId));
            if(docIdx < 0){
                return null;
            }else{
                return docIdx;
            }
        },
        getInfo(refId){
            if(hasSameIdInfo(refId)){
                const docInfo = _docInfoList.find((info)=>(info.docId == refId));
                return {
                    docId: docInfo.docId,
                    docName: docInfo.docName,
                    docAuthor: docInfo.docAuthor,
                    docPublisher: docInfo.docPublisher,
                    docPubDate: docInfo.docPubDate,
                    docPages: docInfo.docPages,
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
        _refCnt: 0,
        _referenceList: [],
        addReference(docId, pages){
            let ref = val.emptyRefInfo();
            ref.refNo = _refCnt;
            ref.docId = docId;
            ref.docPages = pages;
            _referenceList.push(ref);
            _refCnt += 1;
        },
        getReference(docId){
            let references = [];
            _referenceList.forEach((reference)=>{
                if(reference.docId == docId){}
                    let ref = val.emptyRefInfo();
                    ref.docId = reference.docId;
                    ref.docPages = reference.docPages;
                    references.push(ref);
                }
            );
            return references;
        },
        getAllReference(){
            let references = [];
            _referenceList.forEach((reference)=>{
                let ref = val.emptyRefInfo();
                ref.docId = reference.docId;
                ref.docPages = reference.docPages;
                references.push(ref);
            });
            return references;
        }
    };

    let fn = {

        init(){
            val._refCnt = 0;
            val._docInfoList = [];
            val._referenceList = [];
        },

        define(){
            customElements.define('ref-doc', RefDocTag);
            customElements.define('ref-doc-id', RefDocIdTag);
            customElements.define('ref-doc-name', RefDocNameTag);
            customElements.define('ref-doc-author', RefDocAuthorTag);
            customElements.define('ref-book-publisher', RefBookPublisherTag);
            customElements.define('ref-book-published-date', RefBookPublishedDateTag);
            customElements.define('ref-web-link', RefWebLinkTag);
            customElements.define('ref-web-visited-date', RefWebVisitedDateTag);
        },

        // custom tags actions
        refDocTagFunc(){

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
        refBookPagesTagFunc(){

        },
        refWebLinkTagFunc(){

        },
        refWebVisitedDateTagFunc(){

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
});
