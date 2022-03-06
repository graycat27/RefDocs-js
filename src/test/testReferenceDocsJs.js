function assert(actual, expected) {
  let result = (actual === expected);
  if(Array.isArray(actual) && Array.isArray(expected)){
    if(actual.length == expected.length){
      result = true;
      for(let ai = 0; ai < actual.length; ai++){
        if(actual[ai] === expected[ai]){
          continue;
        }
        result = false;
        break;
      }
    }else{
      result = false;
    }
  }else{
    if(typeof(actual) === typeof(expected)){
      const actProps = [] || Object.getOwnPropertyNames(actual);
      const expProps = [] || Object.getOwnPropertyNames(expected);

      result = true;
      if (actProps.length !== expProps.length) {
        result = false;
      }else{
        for (var i = 0; i < actProps.length; i++) {
          const propName = actProps[i];
          if (actual[propName] !== expected[propName]) {
            result = false;
          }
        }
      }
    }
  }
  if(result){
    console.log('> assertion success');
    return true;
  }else{
    console.error('> assertion failed');
    console.dir(actual);
    console.dir(expected);
    return false;
  }
}

function testCase1(){
    console.log('test #1');
    referenceDocs.fn.init();
    let as1_1 = assert(0, referenceDocs.val._refCnt);
    let as1_2 = assert([], referenceDocs.val._docInfoList);
    let as1_3 = assert([], referenceDocs.val._referenceList);
    if(as1_1 && as1_2 && as1_3){
        document.getElementById('test1result').innerHTML = 'success';
    }else{
        document.getElementById('test1result').innerHTML = 'failed';
        document.getElementById('test1result').style.color = 'red';
    }
}

function testCase2(){
    console.log('test #2');
    let as2 = assert({
        docId: null,
        docName: null,
        docAuthor: null,
        docPublisher: null,
        docPubDate: null,
        docLink: null,
        docVisitedDate: null
    }, referenceDocs.val.emptyDocInfo());
    if(as2){
        document.getElementById('test2result').innerHTML = 'success';
    }else{
        document.getElementById('test2result').innerHTML = 'failed';
        document.getElementById('test2result').style.color = 'red';
    }
}

function testCase3(){
    console.log('test #3');
    let as3 = assert({
        refNo: null,
        docId: null,
        docPages: null
    }, referenceDocs.val.emptyRefInfo());
    if(as3){
        document.getElementById('test3result').innerHTML = 'success';
    }else{
        document.getElementById('test3result').innerHTML = 'failed';
        document.getElementById('test3result').style.color = 'red';
    }
}

function testCase4(){
    console.log('test #4');
    referenceDocs.val.addInfo('id1', 'name1', 'author1', 'pub1', 'date1', null, null);
    const ref4_0 = referenceDocs.val._docInfoList[0];
    let as4 = assert({
        docId: 'id1',
        docName: 'name1',
        docAuthor: 'author1',
        docPublisher: 'pub1',
        docPubDate: 'date1',
        docLink: null,
        docVisitedDate: null
    }, ref4_0);
    if(as4){
        document.getElementById('test4result').innerHTML = 'success';
    }else{
        document.getElementById('test4result').innerHTML = 'failed';
        document.getElementById('test4result').style.color = 'red';
    }
}

function testCase5(){
    console.log('test #5');
    referenceDocs.fn.init();
    referenceDocs.val.addInfo('id1', 'name1', 'author1', null, null, 'adr1', 'visDate1');
    const ref5_0 = referenceDocs.val._docInfoList[0];
    let as5 = assert({
        docId: 'id1',
        docName: 'name1',
        docAuthor: 'author1',
        docPublisher: null,
        docPubDate: null,
        docLink: 'adr1',
        docVisitedDate: 'visDate1'
    }, ref5_0);
    if(as5){
        document.getElementById('test5result').innerHTML = 'success';
    }else{
        document.getElementById('test5result').innerHTML = 'failed';
        document.getElementById('test5result').style.color = 'red';
    }
}

function testCase6(){
    console.log('test #6');
    referenceDocs.fn.init();
    referenceDocs.val.addInfo('id1', 'name1', 'author1', 'pub1', 'pubDate1', 'adr1', 'visDate1');
    referenceDocs.val.addInfo('id1', '1eman', '1rohtua', '1bup', '1etaDbup', '1rda', '1etaDsiv');
    const ref6_0 = referenceDocs.val._docInfoList[0];
    let as6 = assert({
        docId: 'id1',
        docName: 'name1',
        docAuthor: 'author1',
        docPublisher: 'pub1',
        docPubDate: 'pubDate1',
        docLink: 'adr1',
        docVisitedDate: 'visDate1'
    }, ref6_0);
    if(as6){
        document.getElementById('test6result').innerHTML = 'success';
    }else{
        document.getElementById('test6result').innerHTML = 'failed';
        document.getElementById('test6result').style.color = 'red';
    }
}

function testCase7(){
    console.log('test #7');
    referenceDocs.fn.init();
    referenceDocs.val.addInfo('id1', null, null, null, null, null, null);
    referenceDocs.val.addInfo('id1', '1eman', '1rohtua', '1bup', '1etaDbup', '1rda', '1etaDsiv');
    const ref7_0 = referenceDocs.val._docInfoList[0];
    let as7 = assert({
        docId: 'id1',
        docName: '1eman',
        docAuthor: '1rohtua',
        docPublisher: '1bup',
        docPubDate: '1etaDbup',
        docLink: '1rda',
        docVisitedDate: '1etaDsiv'
    }, ref7_0);
    if(as7){
        document.getElementById('test7result').innerHTML = 'success';
    }else{
        document.getElementById('test7result').innerHTML = 'failed';
        document.getElementById('test7result').style.color = 'red';
    }
}

function testCase8(){
    console.log('test #8');
    referenceDocs.fn.init();
    referenceDocs.val.addInfo('id1', 'name1', 'author1', 'pub1', 'pubDate1', 'adr1', 'visDate1');
    referenceDocs.val.addInfo('id2', 'name2', 'author2', 'pub2', 'pubDate2', 'adr2', 'visDate2');
    const ref8_0 = referenceDocs.val._docInfoList[0];
    const ref8_1 = referenceDocs.val._docInfoList[1];
    let as8_0 = assert({
        docId: 'id1',
        docName: 'name1',
        docAuthor: 'author1',
        docPublisher: 'pub1',
        docPubDate: 'pubDate1',
        docLink: 'adr1',
        docVisitedDate: 'visDate1'
    }, ref8_0);
    let as8_1 = assert({
        docId: 'id2',
        docName: 'name2',
        docAuthor: 'author2',
        docPublisher: 'pub2',
        docPubDate: 'pubDate2',
        docLink: 'adr2',
        docVisitedDate: 'visDate2'
    }, ref8_1);
    if(as8_0 && as8_1){
        document.getElementById('test8result').innerHTML = 'success';
    }else{
        document.getElementById('test8result').innerHTML = 'failed';
        document.getElementById('test8result').style.color = 'red';
    }
}

function testCase9(){
    console.log('test #9');
    const ref9_0 = referenceDocs.val._getInfoIndex('id1');
    const ref9_1 = referenceDocs.val._getInfoIndex('id2');
    const ref9_2 = referenceDocs.val._getInfoIndex('id3');
    let as9_0 = assert(0, ref9_0);
    let as9_1 = assert(1, ref9_1);
    let as9_2 = assert(null, ref9_2);
    if(as9_0 && as9_1 && as9_2){
        document.getElementById('test9result').innerHTML = 'success';
    }else{
        document.getElementById('test9result').innerHTML = 'failed';
        document.getElementById('test9result').style.color = 'red';
    }
}

function testCase10(){
    console.log('test #10');
    const ref10_0 = referenceDocs.val.getDocInfo('id2');
    const ref10_1 = referenceDocs.val.getDocInfo('id3');
    const as10_0 = assert({
        docId: 'id2',
        docName: 'name2',
        docAuthor: 'author2',
        docPublisher: 'pub2',
        docPubDate: 'pubDate2',
        docLink: 'adr2',
        docVisitedDate: 'visDate2'
    }, ref10_0);
    const as10_1 = assert(null, ref10_1);
    if(as10_0 && as10_1){
        document.getElementById('test10result').innerHTML = 'success';
    }else{
        document.getElementById('test10result').innerHTML = 'failed';
        document.getElementById('test10result').style.color = 'red';
    }
}