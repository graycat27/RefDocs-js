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
class RefDocTag extends HtmlElement {
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
class RefDocIdTag extends HtmlElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocIdTagFunc(this);
    }
}
class RefDocNameTag extends HtmlElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocNameTagFunc(this);
    }
}
class RefDocAuthorTag extends HtmlElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refDocAuthorTagFunc(this);
    }
}
class RefBookPublisherTag extends HtmlElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPublisherTagFunc(this);
    }
}
class RefBookPublishedDateTag extends HtmlElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPublishedDateTagFunc(this);
    }
}
class RefBookPagesTag extends HtmlElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refBookPagesTagFunc(this);
    }
}
class RefWebLinkTag extends HtmlElement {
    constructor(){
        super();
        //hoge
    }

    connectedCallback(){
        referenceDocs.fn.refWebLinkTagFunc(this);
    }
}
class RefWebVisitedDateTag extends HtmlElement {
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

    let fn = {

        init(){
            //変数の初期化とかあれば
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
    	fn: fn
    };
}());

window.addEventListener('DOMContentLoaded', function(){
    referenceDocs.fn.init();
    referenceDocs.fn.define();
});
