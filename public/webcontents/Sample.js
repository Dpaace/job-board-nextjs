console.log('Sample.js loaded successfully');

// パノラマの情報取得。コンソールにindex1のパノラマのkeyを表示
const getPanoramaInfo = () => {
    SDKit.panorama.getPanoramaInfo().then((content) => { console.log(content.content[1].key); });

}

// ビューモード設定。ドールハウスに変更
const setViewMode = () => {
    SDKit.mode.setViewMode("dollhouse").then((result) => { console.log(result); });
}

// 計測モード設定。有効化
const setMeasurementModeEnabled = () => {
    SDKit.mode.setMeasurmentModeEnabled(true).then((result) => { console.log(result); });
}

// 計測モード取得
const getMeasurementModeEnabled = () => {
    SDKit.mode.getMeasurmentModeEnabled().then((result) => { console.log(result.content["enabled"]); });
}

// オートパイロットモード設定。オートパイロットモード有効
const setAutopilotModeEnabled = () => {
    SDKit.mode.setAutopilotModeEnabled(true).then((result) => { console.log(result); });
}

// オートパイロットモード設定取得。
const getAutopilotModeEnabled = () => {
    SDKit.mode.getAutopilotModeEnabled().then((result) => { console.log(result.content["enabled"]); });
}

// ビューモード取得
const getViewMode = () => {
    SDKit.mode.getViewMode().then((result) => { console.log(result.viewMode); });
}

// UI設定。すべてのUIをオフ
const setDefaultUIVisible = () => {
    SDKit.ui.setDefaultUIVisible(false, false, false, false, false).then((result) => { console.log(result); });
}

// UI設定取得。
const getDefaultUIVisible = () => {
    SDKit.ui.getDefaultUIVisible().then((result) => {
        console.log("ドールハウスボタンの表示状態" + result.content["dollhouseViewButtonVisible"]);
        console.log(result);
    });
}

// ワールド座標変換。(10,10)
const convertScreenToWorld = () => {
    position2D = { x: 10, y: 10 };
    SDKit.conversion.convertScreenToWorld(position2D).then((result) => { console.log(result.content["position3D"]); });
}
const convertScreenToWorld_1 = () => {
    position2D = { x: 10, y: 10 };
    windowSize = { x: document.body.clientWidth, y: document.body.clientHeight }
    SDKit.conversion.convertScreenToWorld(position2D, windowSize).then((result) => { console.log(result.content["position3D"]); });
}

const convertScreenToWorld_2 = () => {
    position2D = { x: 10, y: 10 };
    windowSize = { x: document.body.clientWidth, y: "" }
    SDKit.conversion.convertScreenToWorld(position2D, windowSize).then((result) => { console.log(result.content["position3D"]); });
}

const convertScreenToWorld_3 = () => {
    position2D = { x: 10, y: 10 };
    windowSize = { x: "", y: document.body.clientHeight }
    SDKit.conversion.convertScreenToWorld(position2D, windowSize).then((result) => { console.log(result.content["position3D"]); });
}

// スクリーン座標変換。(1,1,1)
const convertWorldToScreen = () => {
    position3D = { x: 1, y: 1, z: 1 };
    windowSize = { x: document.body.clientWidth, y: document.body.clientHeight }
    SDKit.conversion.convertWorldToScreen(position3D, windowSize).then((result) => { console.log(result.content["position2D"]); });
}

// オブジェクト生成　keyがcubeの(1,1,1)に大きさ(3,3,3)角度(0,0,0)の六面体を生成。色は#FF0000(赤)透過度は0.5
const createPremitiveObject = () => {
    const position3D = { x: 1, y: 1, z: 1 };
    scale = { x: 3, y: 3, z: 3 };
    rotation = { x: 0, y: 0, z: 0 };

    SDKit.object3D.createPremitiveObject("cube", "Cube", position3D, rotation, scale, "#FF0000", 0.5).then((result) => { console.log(result); });
}

//オブジェクト挿入。　keyがboyのオブジェクトをURLから取得し挿入。
const insert3DObject = () => {
    position3D = { x: 1, y: 1, z: 1 };
    scale = { x: 10, y: 10, z: 10 };
    rotation = { x: 0, y: 0, z: 0 };
    SDKit.object3D.insert3DObject("boy", "https://ricardoreis.net/trilib/demos/avatars/003/003_visemes.zip", position3D, rotation, scale).then((result) => { console.log(result); });
}

// オブジェクト削除。　keyがboyのオブジェクトを削除する。
const remove3DObject = () => {
    SDKit.object3D.remove3DObject("boy").then((result) => { console.log(result); });
}

// オブジェクト編集。　keyがcubeを編集。
const edit3DObject = () => {
    position3D = { x: 1, y: 1, z: 1 };
    scale = { x: 3, y: 3, z: 3 };
    rotation = { x: 0, y: 0, z: 0 };
    SDKit.object3D.edit3DObject("cube", null, rotation, scale, "#FF0000", 1).then((result) => { console.log(result); });
}

// パノラマ移動。keyが28のパノラマへ移動。
const movePanorama = () => {
    SDKit.camera.movePanorama("scan (104)").then((result) => { console.log(result); });
}

// 二点間オブジェクト検知。(1,1,1),(3,3,3)間と(2,1,3),(3,1,5)間にオブジェクトがあるかリストで返却
const exists3DObjectBetweenPoints = () => {
    positionsList = new Array(new Array({ x: 1, y: 1, z: 1 }, { x: 3, y: 3, z: 3 }), new Array({ x: 2, y: 1, z: 3 }, { x: 3, y: 1, z: 5 }));
    SDKit.validation.exists3DObjectBetweenPoints(positionsList).then((result) => { console.log(result) });
}

// スクリーン座標リスト変換
const convertScreenToWorldAsList = () => {
    position2DList = new Array({ x: 1, y: 1 }, { x: 3, y: 3 });
    SDKit.conversion.convertScreenToWorldAsList(position2DList).then((result) => { console.log(result) });
}

const convertScreenToWorldAsList_1 = () => {
    position2DList = new Array({ x: 1, y: 1 }, { x: 3, y: 3 });
    windowSize = { x: document.body.clientWidth, y: document.body.clientHeight }
    SDKit.conversion.convertScreenToWorldAsList(position2DList, windowSize).then((result) => { console.log(result) });
}

const convertScreenToWorldAsList_2 = () => {
    position2DList = new Array({ x: 1, y: 1 }, { x: 3, y: 3 });
    windowSize = { x: document.body.clientWidth, y: "" }
    SDKit.conversion.convertScreenToWorldAsList(position2DList, windowSize).then((result) => { console.log(result) });
}

// ワールド座標リスト変換
const convertWorldToScreenAsList = () => {
    position3DList = new Array({ x: 1, y: 1, z: 1 }, { x: 3, y: 3, z: 3 });
    windowSize = { x: document.body.clientWidth, y: document.body.clientHeight }
    SDKit.conversion.convertWorldToScreenAsList(position3DList, windowSize).then((result) => { console.log(result) });
}

// カメラ座標取得
const getCameraPosition = () => {
    SDKit.camera.getCameraPosition().then((result) => { console.log(result.content) });

}
// カメラ座標取得
const controllPanoramaZoom = () => {
    SDKit.camera.controllPanoramaZoom(0.5).then((result) => { console.log(result) });

}
const setTag = () => {
    const TagData = {
        "tagInfoList": [
            {
                "tagID": "fa706a6b3b1c4ddfa931d05cc45e5247",
                "tagImagePosition": {
                    "x": -1.91633952,
                    "y": 0.8319043,
                    "z": -31.4430733
                },
                "firstPoint": {
                    "x": -1.92101622,
                    "y": -0.168084741,
                    "z": -31.4433632
                },
                "secondPoint": {
                    "x": -1.91633952,
                    "y": 0.8319043,
                    "z": -31.4430733
                },
                "option": {
                    "color": "#DC143C",
                    "shape": "Square",
                    "lineEnabled": false
                }
            },
            {
                "tagID": "2b32a08f9ede4a45ae1cc326844eec64",
                "tagImagePosition": {
                    "x": -4.2659955,
                    "y": 0.103637777,
                    "z": -31.67634
                },
                "firstPoint": {
                    "x": -5.265977,
                    "y": 0.107756376,
                    "z": -31.68084
                },
                "secondPoint": {
                    "x": -4.2659955,
                    "y": 0.103637777,
                    "z": -31.67634
                },
                "option": {
                    "url": "https://th.bing.com/th/id/R.ba44b3d31c867bbd035906f9211273a9?rik=2IydNj2IiY6znQ&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2013%2f10%2f49-information-mark3.png&ehk=sezeqNBOrCjmEI32gkofL3hndeWl4g%2bWFd3j4zoRSM8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                }
            }
        ]
    }
    SDKit.ui.setTag(TagData).then((result) => { console.log(result) });
}



const editTagShape = () => {
    SDKit.ui.editTagShape("fa706a6b3b1c4ddfa931d05cc45e5247", "#FFFFFF").then((result) => { console.log(result) });
}

const getTagInfo = () => {
    SDKit.ui.getTagInfo().then((result) => { console.log(result.content) });
}

const setTagMode = () => {
    SDKit.mode.setTagMode(true).then((result) => { console.log(result) });
}
const setTagMode_false = () => {
    SDKit.mode.setTagMode(false).then((result) => { console.log(result) });
}

const playAnimation = () => {
    animation = {
        "animationList": [
            {
                "type": "MoveToDollhouse",
                "value": {
                    "position": { "x": 12.32757, "y": 9.771091, "z": -2.23316884 },
                    "angle": { "x": 50.5178947, "y": 228.777786, "z": 0 }
                }
            },
            {
                "type": "MoveToPanorama",
                "value": {
                    "panorama": "scan (104)",
                    "angle": { "x": 2.47266912, "y": 175.775665, "z": 0 }
                }
            },
            {
                "type": "MoveToPanorama",
                "value": {
                    "panorama": "scan (3)",
                    "angle": { "x": 15.2727766, "y": 28.4759483, "z": 4.42515216e-7 }
                }
            }
        ]
    }
    SDKit.camera.playAnimation(animation).then((result) => { console.log(result) })
}

const setEditTagMode_true = () => {
    SDKit.mode.setEditTagMode(true).then((result) => { console.log(result.content) })
}

const setEditTagMode_false = () => {
    SDKit.mode.setEditTagMode(false).then((result) => { console.log(result.content) })
}

const stopAnimation = () => {
    SDKit.camera.stopAnimation().then((result) => { result })
}

const setTagEvent = () => {
    tagID = ""
    windowSize = { x: document.body.clientWidth, y: document.body.clientHeight }
    onTargetTagPointerEnter(tagID, windowSize)
    onTargetTagPointerDown(tagID, windowSize)
    onTargetTagPointerExit(tagID, windowSize)
    onTargetTagPointerUp(tagID, windowSize)
}
const onTargetTagPointerEnter = (tagID, windowSize) => {
    SDKit.ui.onTargetTagPointerEnter(tagID, windowSize).then((result) => {
        console.log("マウスが入った");
        onTargetTagPointerEnter(tagID, windowSize)
    })
}
const onTargetTagPointerDown = (tagID, windowSize) => {
    SDKit.ui.onTargetTagPointerDown(tagID, windowSize).then((result) => {
        console.log("クリックした");
        onTargetTagPointerDown(tagID, windowSize)
    })
}
const onTargetTagPointerUp = (tagID, windowSize) => {
    SDKit.ui.onTargetTagPointerUp(tagID, windowSize).then((result) => {
        console.log("クリックやめた");
        onTargetTagPointerUp(tagID, windowSize)
    })
}
const onTargetTagPointerExit = (tagID, windowSize) => {
    SDKit.ui.onTargetTagPointerExit(tagID, windowSize).then((result) => {
        console.log("マウスが出た");
        onTargetTagPointerExit(tagID, windowSize)
    })
}

var iframe = document.getElementById('my-iframe');

//読み込み完了後loadedUnityhandler()が呼ばれる。
iframe.addEventListener('load', () => SDKit.init(document.getElementById('my-iframe')).then(() => { loadedUnityhandler() }))

//ボタン作成のための関数
function createButton(str, func) {
    let btn = document.createElement("button");

    btn.innerHTML = str;

    btn.onclick = () => {
        func();
    };
    document.body.appendChild(btn);
}

function loadedUnityhandler() {
    document.body.style.overflow = "scroll";

    // createButton("パノラマ情報取得", getPanoramaInfo);

    // createButton("ビューモード設定=>ドールハウスへ移行", setViewMode);

    // createButton("ビューモード状態取得", getViewMode);

    // createButton("計測モード設定＝＞有効化", setMeasurementModeEnabled);

    // createButton("計測モード状態取得", getMeasurementModeEnabled);

    // createButton("オートパイロットモード設定＝＞有効化", setAutopilotModeEnabled);

    // createButton("オートパイロットモード状態取得", getAutopilotModeEnabled);

    // createButton("UI設定=>すべてfalse", setDefaultUIVisible);

    // createButton("ドールハウスボタン設定取得", getDefaultUIVisible);

    // createButton("スクリーン座標(10,10)のワールド座標取得", convertScreenToWorld);
    // createButton("スクリーン座標(10,10)のワールド座標取得スクリーンサイズあり", convertScreenToWorld_1);
    // createButton("スクリーン座標(10,10)のワールド座標取得スクリーンサイズ幅欠損", convertScreenToWorld_2);
    // createButton("スクリーン座標(10,10)のワールド座標取得スクリーンサイズ横欠損", convertScreenToWorld_3);

    // createButton("ワールド座標(1,1,1)のスクリーン座標取得", convertWorldToScreen);

    // createButton("スクリーン座標(1,1)(3,3)のワールド座標リスト取得", convertScreenToWorldAsList);
    // createButton("スクリーン座標(1,1)(3,3)のワールド座標リスト取得スクリーンサイズあり", convertScreenToWorldAsList_1);
    // createButton("スクリーン座標(1,1)(3,3)のワールド座標リスト取得スクリーンサイズ幅欠損", convertScreenToWorldAsList_2);

    // createButton("ワールド座標(1,1,1),(3,3,3)のスクリーン座標取得", convertWorldToScreenAsList);

    // createButton("(1,1,1),(3,3,3)間と(2,1,3),(3,1,5)間にオブジェクトがあるかリストで返却", exists3DObjectBetweenPoints);

    // createButton("オブジェクト作成cube", createPremitiveObject);

    // createButton("オブジェクト編集cube編集", edit3DObject);

    // createButton("オブジェクト挿入boy", insert3DObject);

    // createButton("オブジェクト削除 boy", remove3DObject);

    // createButton("カメラ座標取得", getCameraPosition);

    // createButton("パノラマ移動=>key:28へ移動する", movePanorama);

    // createButton("タグ設置", setTag);

    createButton("タグ編集 true", setEditTagMode_true);

    createButton("タグ編集 false", setEditTagMode_false);

    // createButton("タグ情報取得", getTagInfo);

    createButton("タグ設置モードtrue", setTagMode);

    createButton("タグ設置モードfalse", setTagMode_false);

    // createButton("zomm倍率0.5", controllPanoramaZoom);

    // createButton("アニメーション再生", playAnimation);

    // createButton("アニメーション停止", stopAnimation);

    // createButton("タグのイベント設定", setTagEvent);
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    var i = 0;
    // ドキュメント全体にクリックイベントリスナーを追加
    canvas.addEventListener('click', e => {
        mouse_y = document.body.clientHeight - e.pageY;
        position2D = { x: e.pageX, y: mouse_y };
        windowSize = { x: document.body.clientWidth, y: document.body.clientHeight }
        console.log("マウスのポジション x:" + position2D["x"] + " y: " + position2D["y"]);
        // SDKit.conversion.convertScreenToWorld(position2D,windowSize).then((result) => {
        //     console.log(result.content["position3D"]);
        //     position3D = result.content["position3D"];
        //     scale = { x: 3, y: 3, z: 3 };
        //     rotation = { x: 0, y: 0, z: 0 };
        //     SDKit.object3D.createPremitiveObject("cube" + i, "Cube", position3D, rotation, scale, "#FF0000", 0.5).then((result) => { console.log(result) });
        //     i++;
        // });
        position2DList = new Array({ x: e.pageX, y: mouse_y }, { x: 3, y: 3 });
        SDKit.conversion.convertScreenToWorldAsList(position2DList, windowSize).then((result) => {
            console.log(result.content[0]);
            position3D = result.content[0];
            scale = { x: 3, y: 3, z: 3 };
            rotation = { x: 0, y: 0, z: 0 };
            SDKit.object3D.createPremitiveObject("cube" + i, "Cube", position3D, rotation, scale, "#FF0000", 0.5).then((result) => { console.log(result) });
            i++;
        })
    }, false);
}


