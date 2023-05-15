{
    function ttn() {
        var b3, cn, a5, aC, be;
        var cC, a2, A;
        var bK, g, aQ, aT, a8, e, cm;
        var bF, bi, b9, bS, bV, k, z;
        var aP, cv, G, cl, b4, au;
        var bs, cy, y, ah, aR, ax, bJ, az;
        var bc, cc, ak, bZ, C, aM, cD, aA;
        var aZ, bf, U, E, aX, a6, aE, T;
        var O, cq, j, l, aF, aq;
        var ca, aJ, c, ar, a0, ce;
        var cz, ao;
        var V = {};
        var b;
        var af;
        var av;
        var ay;
        var b2;
        var co;
        var p;
        var H;
        var bC;
        var ch;
        var al;
        var bo;
        var b7;
        var cp;
        var bQ;
        var bO;
        var cw;
        var a3 = 96 / 25.4;
        var bp = false;
        var br;
        var bl;
        var B;
        var ad;
        var bR;
        var ag;
        var cb;
        var ae;
        var bN;
        var cr;
        var aG;
        var bm;
        var aS;
        var Q;
        var W;
        var aY = false;
        $("#canvas_stn").attr({ width: "768", height: "960" });
        var bW = document.getElementById("canvas_stn");
        var D = bW.getContext("2d");
        var bb = $("#canvas_stn");
        var a9 = bb.offset();
        var bx = a9.left;
        var aD = a9.top;
        var K = bb.scrollLeft();
        var ct = bb.scrollTop();
        var Z = bW.width;
        var a1 = bW.height;
        $("#canvas_dte").attr({ width: "768", height: "960" });
        var aK = document.getElementById("canvas_dte");
        var b1 = aK.getContext("2d");
        var N = $("#canvas_dte");
        var cg = N.offset();
        var an = cg.left;
        var o = cg.top;
        var ci = N.scrollLeft();
        var bg = N.scrollTop();
        var cx = aK.width;
        var F = aK.height;
        $("#canvas_ss2st").attr({ width: "768", height: "960" });
        var bu = document.getElementById("canvas_ss2st");
        var at = bu.getContext("2d");
        var a7 = $("#canvas_ss2st");
        var bH = a7.offset();
        var ac = bH.left;
        var P = bH.top;
        var bq = a7.scrollLeft();
        var bt = a7.scrollTop();
        var f = bu.width;
        var am = bu.height;
        $("#canvas_rt2tt").attr({ width: "768", height: "960" });
        var v = document.getElementById("canvas_rt2tt");
        var bP = v.getContext("2d");
        var cB = $("#canvas_rt2tt");
        var d = cB.offset();
        var bD = d.left;
        var bn = d.top;
        var r = cB.scrollLeft();
        var u = cB.scrollTop();
        var aI = v.width;
        var bL = v.height;
        $("#canvas_otrt").attr({ width: "768", height: "960" });
        var bz = document.getElementById("canvas_otrt");
        var bU = bz.getContext("2d");
        var a = $("#canvas_otrt");
        var b6 = a.offset();
        var bj = b6.left;
        var cj = b6.top;
        var I = a.scrollLeft();
        var aL = a.scrollTop();
        var t = bz.width;
        var J = bz.height;
        $("#canvas_rtb").attr({ width: "768", height: "960" });
        var aj = document.getElementById("canvas_rtb");
        var bB = aj.getContext("2d");
        var w = $("#canvas_rtb");
        var aV = w.offset();
        var M = aV.left;
        var cu = aV.top;
        var bI = w.scrollLeft();
        var aN = w.scrollTop();
        var b5 = aj.width;
        var n = aj.height;
        $("#canvas_col").attr({ width: "768", height: "960" });
        var ap = document.getElementById("canvas_col");
        var bE = ap.getContext("2d");
        var x = $("#canvas_col");
        var cs = x.offset();
        var S = cs.left;
        var cA = cs.top;
        var bM = x.scrollLeft();
        var aU = x.scrollTop();
        var cd = ap.width;
        var q = ap.height;
        $("#canvas_rtsm").attr({ width: "768", height: "960" });
        var Y = document.getElementById("canvas_rtsm");
        var aw = Y.getContext("2d");
        var bd = $("#canvas_rtsm");
        var ba = bd.offset();
        var L = ba.left;
        var aO = ba.top;
        var bT = bd.scrollLeft();
        var h = bd.scrollTop();
        var bv = Y.width;
        var bY = Y.height;
        $("#canvas_rtfm").attr({ width: "768", height: "960" });
        var ai = document.getElementById("canvas_rtfm");
        var aH = ai.getContext("2d");
        var bk = $("#canvas_rtfm");
        var by = bk.offset();
        var X = by.left;
        var a4 = by.top;
        var b8 = bk.scrollLeft();
        var s = bk.scrollTop();
        var bG = ai.width;
        var cf = ai.height;
        (function (cE) {
            cE("#stn_onClick").on("click", function (cF) {
                cF.preventDefault();
                b3 = guniac2m("#stnCutTubeOD");
                cn = guniac2m("#stnBaseTubeOD");
                a5 = guniac2m("#stnMatlThickness");
                aC = parseFloat(cE("#stnAngle").val());
                be = guniac2m("#stnOffset");
                W = "TUBE_NOTCHER";
                D.clearRect(0, 0, Z, a1);
                aa(W, D);
            });
            cE("#dte_onClick").on("click", function (cF) {
                cF.preventDefault();
                cC = guniac2m("#dteCutTubeOD");
                a2 = guniac2m("#dteAmplitude");
                A = parseInt(cE("#dteNumOfCycles").val());
                W = cE("input[name=dteStyle]:checked", "#dte_form").val();
                b1.clearRect(0, 0, cx, F);
                aa(W, b1);
            });
            cE("#ss2st_onClick").on("click", function (cF) {
                cF.preventDefault();
                bF = guniac2m("#ss2stSeatStayOD");
                ss2st_BaseTubeOD = guniac2m("#ss2stSeatTubeOD");
                b9 = guniac2m("#ss2stSeatStayMaterialThickness");
                bS = parseFloat(cE("#ss2stSideViewAngle").val());
                bV = parseFloat(cE("#ss2stSeatStay2SeatStayAngle").val());
                k = guniac2m("#ss2ssDistBetweenEdges");
                z = cE("input[name=ss2st_side]:checked", "#ss2st_form").val();
                W = "SEAT_STAY_JOINT";
                at.clearRect(0, 0, f, am);
                aa(W, at);
            });
            cE("#rt2tt_onClick").on("click", function (cF) {
                cF.preventDefault();
                O = guniac2m("#rt2ttCutTubeOD");
                cq = guniac2m("#rt2ttMatlThickness");
                j = guniac2m("#rt2ttWideTaperOD");
                l = guniac2m("#rt2ttNarrowTaperOD");
                aF = parseFloat(cE("#rt2ttAngle").val());
                aq = guniac2m("#rt2ttOffset");
                W = "ROUND_TO_TAPERED";
                bP.clearRect(0, 0, aI, bL);
                aa(W, bP);
            });
            cE("#otrt_onClick").on("click", function (cF) {
                cF.preventDefault();
                otrt_CutTubeMajAxis = guniac2m("#otrtCutTubeMajAxis");
                otrt_CutTubeMinAxis = guniac2m("#otrtCutTubeMinAxis");
                otrt_BaseTubeOD = guniac2m("#otrtBaseTubeOD");
                otrt_MatlThickness = guniac2m("#otrtMatlThickness");
                otrt_Angle = parseFloat(cE("#otrtAngle").val());
                otrt_Offset = guniac2m("#otrtOffset");
                which_axis_parallel_baseTube = cE("input[name=otrt_axis]:checked", "#otrt_form").val();
                W = "ELLIPTICAL_TO_ROUND";
                bU.clearRect(0, 0, t, J);
                aa(W, bU);
            });
            cE("#rtb_form input[name='rtbTechnique']").click(function () {
                bc = cE("input[name=rtbTechnique]:checked", "#rtb_form").val();
                if (bc === "edgeToEdge") {
                    cE(".tube_distance").css("visibility", "hidden");
                    cE(".contact_length").css("visibility", "visible");
                }
                if (bc === "bisector") {
                    cE(".tube_distance").css("visibility", "visible");
                    cE(".contact_length").css("visibility", "hidden");
                }
            });
            cE("#rtb_onClick").on("click", function (cF) {
                cF.preventDefault();
                bc = cE("input[name=rtbTechnique]:checked", "#rtb_form").val();
                cc = guniac2m("#rtbTube1OD");
                ak = guniac2m("#rtbTube2OD");
                bZ = guniac2m("#rtbBraceOD");
                C = parseFloat(cE("#rtbAngleBetween1and2").val());
                aM = guniac2m("#rtbBraceMatlThickness");
                cD = guniac2m("#rtbTube1ContactLength");
                aA = guniac2m("#rtbTube2ContactLength");
                aZ = guniac2m("#rtbDistBetween1and2atCenterline");
                if (bc === "edgeToEdge") {
                    W = "GUSSET_EDGE_METHOD";
                } else {
                    if (bc === "bisector") {
                        W = "GUSSET_BISECTOR_METHOD";
                    } else {
                        alert("Please Choose a one of the two calculation methods...");
                    }
                }
                bB.clearRect(0, 0, b5, n);
                aa(W, bB);
            });
            cE("#col_onClick").on("click", function (cF) {
                cF.preventDefault();
                bs = cE("input[name=colTechnique]:checked", "#col_form").val();
                cy = guniac2m("#colFeederTubeOD");
                y = guniac2m("#colFeederMatlThickness");
                ah = guniac2m("#colCommonTubeOD");
                aR = guniac2m("#colCommonMatlThickness");
                ax = parseInt(cE("#colFeedNumb").val());
                bJ = parseFloat(cE("#colAngle").val());
                az = guniac2m("#colSafetyOffset");
                W = "COLLECTOR";
                bE.clearRect(0, 0, cd, q);
                aa(W, bE);
            });
            cE("#rtsm_onClick").on("click", function (cF) {
                cF.preventDefault();
                bK = guniac2m("#rtsmCutTubeOD");
                g = guniac2m("#rtsmMatlThickness");
                aQ = guniac2m("#rtsmBaseSQTubeOD");
                aT = guniac2m("#rtsmBaseSQTubeThickness");
                a8 = parseFloat(cE("#rtsmAngle").val());
                e = parseFloat(cE("#rtsmFaceOrientation").val());
                cm = guniac2m("#rtsmOffset");
                W = "ROUND_TO_SQUARE_TUBE_METHOD";
                aw.clearRect(0, 0, bv, bY);
                aa(W, aw);
            });
            cE("#rtfm_onClick").on("click", function (cF) {
                cF.preventDefault();
                aP = cE("input[name=rtfmTechnique]:checked", "#rtfm_form").val();
                cv = guniac2m("#rtfmCutTubeOD");
                G = guniac2m("#rtfmMatlThickness");
                cl = guniac2m("#rtfmFlatPlateMatlThickness");
                b4 = parseFloat(cE("#rtfmAngle").val());
                au = guniac2m("#rtfmEndCapClearance");
                W = "ROUND_TO_FLAT_MATERIAL";
                aH.clearRect(0, 0, bG, cf);
                aa(W, aH);
            });
            cE("#future_onClick").on("click", function (cG) {
                var cF = cE("#future_form").serializeObject();
                console.log(cF);
                cG.preventDefault();
                cE.ajax({
                    type: "post",
                    url: "./briefsurvey.php",
                    data: cF,
                    success: function () {
                        alert("form was submitted");
                    },
                });
            });
            cE("#stn_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_stn"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/jpg");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "JPG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                    logging: true,
                });
            });
            cE("#dte_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_dte"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#ss2st_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_ss2st"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#rt2tt_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_rt2tt"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#otrt_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_otrt"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#rtb_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                bc = cE("input[name=rtbTechnique]:checked", "#rtb_form").val();
                if (bc === "edgeToEdge") {
                } else {
                    if (bc === "bisector") {
                    }
                }
                html2canvas(cE("#canvas_rtb"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#col_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_col"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#rtsm_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_rtsm"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#rtfm_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_rtfm"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#fatc_onPrintClick").on("click", function (cF) {
                cF.preventDefault();
                html2canvas(cE("#canvas_fatc"), {
                    onrendered: function (cG) {
                        var cI = cG.toDataURL("image/png");
                        var cH = new jsPDF("p", "mm", V.paperSize);
                        cH.addImage(cI, "PNG", 10, 10);
                        cH.save("tube-notcher-file.pdf");
                    },
                });
            });
            cE("#stn_onDXFClick").on("click", function (cF) {
                cF.preventDefault();
                alert("The DXF output function is under construction.\n Please check back later...");
            });
            cE("#stn_onHelpClick").on("click", function () {
                cE("#stn_info_box").dialog("open");
            });
            cE("#dte_onHelpClick").on("click", function (cF) {
                cF.preventDefault();
                cE("#dte_info_box").dialog("open");
            });
            cE("#ss2st_onHelpClick").on("click", function (cF) {
                cF.preventDefault();
                cE("#ss2st_info_box").dialog("open");
                cE(".ui-dialog :button").blur();
            });
            cE("#rt2tt_onHelpClick").on("click", function (cF) {
                cF.preventDefault();
                cE("#rt2tt_info_box").dialog("open");
            });
            cE("#otrt_onHelpClick").on("click", function (cF) {
                cF.preventDefault();
                cE("#otrt_info_box").dialog("open");
            });
            cE("#rtb1_onHelpClick").on("click", function () {
                cE("#rtb1_info_box").dialog("open");
            });
            cE("#rtb2_onHelpClick").on("click", function () {
                cE("#rtb2_info_box").dialog("open");
            });
            cE("#col_onHelpClick").on("click", function () {
                cE("#col_info_box").dialog("open");
                cE(".ui-dialog :button").blur();
                cE(".ui-dialog a").blur();
            });
            cE("#rtsm_onHelpClick").on("click", function () {
                cE("#rtsm_info_box").dialog("open");
            });
            cE("#rtfm_onHelpClick").on("click", function () {
                cE("#rtfm_info_box").dialog("open");
            });
            cE("#fatc_onHelpClick").on("click", function () {
                cE("#fatc_info_box").dialog("open");
            });
        })(jQuery);
        function ck() {
            return 96;
        }
        function aa(dm, dw) {
            var dt = 2;
            var cI = [];
            var dH = [];
            var dZ = [];
            var dn = [];
            var dN = [];
            var cX = [];
            var c1 = [];
            var cW = [];
            var dB = [];
            var c3 = [];
            var cS;
            var cQ;
            var cE;
            var dc;
            var db;
            var c9;
            var c6;
            var dX;
            var dU;
            var c2;
            var dJ;
            var cR;
            var dl;
            var dq;
            var dS;
            var dv;
            var dR;
            var cG;
            var du;
            var dF, dT, cL, cN;
            var dI;
            var dP;
            var dz;
            var dr;
            var dC;
            var dO;
            var dW;
            var c7 = 25.4 * 3 * a3;
            var dV = false;
            if (bp) {
            }
            if (dV) {
            }
            if (dm === "TUBE_NOTCHER") {
                c9 = b3 * a3 * Math.PI;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                cz = 1000000;
                ao = 0;
                cI = [];
                dH = [];
                dZ = [];
                if (aC % 90 === 0) {
                    aC = aC - 0.00001;
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / b3) * 2;
                    dR = (b3 / 2) * Math.cos(dS);
                    cG = (b3 / 2) * Math.sin(dS);
                    du = Math.sqrt((cn / 2) * (cn / 2) - (cG + be) * (cG + be));
                    dF = dR / Math.cos((aC / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((aC / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((aC / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    if (cN > ao) {
                        ao = cN;
                    }
                    if (cN < cz) {
                        cz = cN;
                    }
                    dH[dc] = dc;
                    cI[dc] = -1 * (cN * a3);
                    dR = ((b3 - 2 * a5) / 2) * Math.cos(dS);
                    cG = ((b3 - 2 * a5) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(cn / 2, 2) - Math.pow(cG + be, 2));
                    dF = dR / Math.cos((aC / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((aC / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((aC / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = -1 * (cN * a3);
                }
                dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                if (b3 + Math.abs(be) > cn) {
                    V = new pps((ao * a3) / 2, dt, dU * 1.5);
                    Z = bW.width;
                    a1 = bW.height;
                    D.clearRect(0, 0, Z, a1);
                    $("#canvas_stn").attr({ width: V.width, height: V.height });
                } else {
                    V = new pps((ao * a3) / 2, dt, dU);
                    Z = bW.width;
                    a1 = bW.height;
                    D.clearRect(0, 0, Z, a1);
                    $("#canvas_stn").attr({ width: V.width, height: V.height });
                }
                phop(dw, dm, a3);
                dw.fillText("This tube is " + b3.toFixed(1) + "mm [" + (b3 / 25.4).toFixed(3) + '"] O.D.      ( ' + a5.toFixed(1) + "mm [" + (a5 / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                dw.fillText("     w/ circumference of " + (Math.PI * b3).toFixed(1) + "mm [" + ((Math.PI * b3) / 25.4).toFixed(3) + '"].', 4 * a3, 28 * a3);
                dw.fillText("Mating Tube is " + cn.toFixed(1) + "mm [" + (cn / 25.4).toFixed(3) + '"] O.D. at ' + aC.toFixed(1) + " degrees.", 4 * a3, 32 * a3);
                dw.fillText("Tube offset (CL/CL) is " + be.toFixed(1) + "mm [" + (be / 25.4).toFixed(3) + '"] .', 4 * a3, 36 * a3);
                dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                doiaocla(dw, dU, cI, dZ, dH, a5, dt);
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(dU + cI[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt - 1]);
                dw.lineTo(dU + cI[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
                if (b3 + Math.abs(be) > cn) {
                    aC = 180 - aC;
                    if (aC % 90 === 0) {
                        aC = aC - 0.00001;
                    }
                    for (dc = 0; dc < dt; dc++) {
                        dv = dc / a3;
                        dS = (dv / b3) * 2;
                        dR = (b3 / 2) * Math.cos(dS);
                        cG = (b3 / 2) * Math.sin(dS);
                        du = Math.sqrt(Math.pow(cn / 2, 2) - Math.pow(cG + be, 2));
                        dF = dR / Math.cos((aC / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((aC / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((aC / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dH[dc] = dc;
                        cI[dc] = dU + cN * a3;
                        dR = ((b3 - 2 * a5) / 2) * Math.cos(dS);
                        cG = ((b3 - 2 * a5) / 2) * Math.sin(dS);
                        du = Math.sqrt(Math.pow(cn / 2, 2) - Math.pow(cG + be, 2));
                        dF = dR / Math.cos((aC / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((aC / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((aC / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dZ[dc] = dU + cN * a3;
                    }
                    doiaocla(dw, 0, cI, dZ, dH, a5, dt);
                    dw.beginPath();
                    dw.moveTo(cI[0], dH[0]);
                    dw.lineTo(dU * 1.5, dH[0]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(cI[dt - 1], dH[dt - 1]);
                    dw.lineTo(dU * 1.5, dH[dt - 1]);
                    dw.stroke();
                    datm(dw, dH, dt, dU, dU * 1.5, a3);
                    dw.beginPath();
                    dw.moveTo(dU + 50, dH[dt / 4]);
                    dw.lineTo(dU * 1.5, dH[dt / 4]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(dU + 50, dH[dt / 2]);
                    dw.lineTo(dU * 1.5, dH[dt / 2]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(dU + 50, dH[(dt / 4) * 3]);
                    dw.lineTo(dU * 1.5, dH[(dt / 4) * 3]);
                    dw.stroke();
                }
            }
            if (dm === "SINE") {
                c9 = cC * a3 * Math.PI;
                numbPtsInSingleCycle = Math.floor(c9 / A + 0.5);
                dt = A * numbPtsInSingleCycle;
                dX = a2 / 2 / 25.4;
                dX = Math.ceil(dX);
                dU = dX * 25.4 * a3 + 2 * 25.4 * a3;
                cI = [];
                dH = [];
                for (dc = 0; dc < dt; dc++) {
                    cE = (dc * 360) / (c9 / A);
                    cS = a2 * 0.5 * a3 * Math.sin(Math.radians(cE));
                    dH[dc] = dc;
                    cI[dc] = dU + cS;
                }
                V = new pps(a2 * 0.5 * a3, dt, dU);
                cx = aK.width;
                F = aK.height;
                b1.clearRect(0, 0, cx, F);
                $("#canvas_dte").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                dacoc(dw, cI, dH, dt);
                datm(dw, dH, dt, 0, dU, a3);
                d9drldto(dw, cI, dH, dt, A);
            }
            if (dm === "SQUARE") {
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                c9 = cC * a3 * Math.PI;
                numbPtsInSingleCycle = Math.floor(c9 / A + 0.5);
                dt = A * numbPtsInSingleCycle;
                dX = a2 / 25.4;
                if (dX > 3) {
                    dX = dX / 2;
                }
                dX = Math.round(dX + 2);
                dU = dX * 25.4 * a3;
                cI = [];
                dH = [];
                for (dc = 0; dc < dt; dc++) {
                    cE = (dc * 360) / (c9 / A);
                    cS = a2 * 0.5 * a3 * Math.sign(Math.sin(Math.radians(cE)));
                    dH[dc] = dc;
                    cI[dc] = dU + cS;
                }
                V = new pps(a2 * 0.5 * a3, dt, dU);
                cx = aK.width;
                F = aK.height;
                b1.clearRect(0, 0, cx, F);
                $("#canvas_dte").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                dacoc(dw, cI, dH, dt);
                datm(dw, dH, dt, 0, dU, a3);
                d9drldto(dw, cI, dH, dt, A);
            }
            if (dm === "TRIANGLE") {
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                c9 = cC * a3 * Math.PI;
                numbPtsInSingleCycle = Math.floor(c9 / A + 0.5);
                dt = A * numbPtsInSingleCycle;
                dX = a2 / 25.4;
                if (dX > 3) {
                    dX = dX / 2;
                }
                dX = Math.round(dX + 2);
                dU = dX * 25.4 * a3;
                cI = [];
                dH = [];
                dJ = (a2 * a3) / 2;
                cR = (a2 * a3) / (numbPtsInSingleCycle / 2);
                dl = 0;
                var dD = 1;
                for (dc = 0; dc < dt; dc++) {
                    if (dl <= 0) {
                        dD = dD * -1;
                    }
                    if (dl > Math.floor(a2 * a3 + 0.5)) {
                        dD = dD * -1;
                    }
                    dH[dc] = dc;
                    cI[dc] = dU - dJ + Math.floor(dl + 0.5);
                    dl = dl - cR * dD;
                }
                V = new pps(a2 * 0.5 * a3, dt, dU);
                cx = aK.width;
                F = aK.height;
                b1.clearRect(0, 0, cx, F);
                $("#canvas_dte").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                dacoc(dw, cI, dH, dt);
                datm(dw, dH, dt, 0, dU, a3);
                d9drldto(dw, cI, dH, dt, A / 2);
            }
            if (dm === "SAWTOOTH") {
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                c9 = cC * a3 * Math.PI;
                numbPtsInSingleCycle = Math.floor(c9 / A + 0.5);
                dt = A * numbPtsInSingleCycle;
                dX = a2 / 25.4;
                if (dX > 3) {
                    dX = dX / 2;
                }
                dX = Math.round(dX + 2);
                dU = dX * 25.4 * a3;
                cI = [];
                dH = [];
                dJ = (a2 * a3) / 2;
                cR = (a2 * a3) / numbPtsInSingleCycle;
                dl = a2 * a3;
                for (dc = 0; dc < dt; dc++) {
                    if (dl <= 0) {
                        dl = a2 * a3;
                    }
                    dH[dc] = dc;
                    cI[dc] = dU - dJ + dl;
                    dl = dl - cR;
                }
                V = new pps(a2 * 0.5 * a3, dt, dU);
                cx = aK.width;
                F = aK.height;
                b1.clearRect(0, 0, cx, F);
                $("#canvas_dte").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                dacoc(dw, cI, dH, dt);
                datm(dw, dH, dt, 0, dU, a3);
                d9drldto(dw, cI, dH, dt, A / 2);
            }
            if (dm === "HYPER") {
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                c9 = cC * a3 * Math.PI;
                numbPtsInSingleCycle = Math.floor(c9 / A + 0.5);
                dt = A * numbPtsInSingleCycle;
                dX = a2 / 25.4;
                if (dX > 3) {
                    dX = dX / 2;
                }
                dX = Math.round(dX + 2);
                dU = dX * 25.4 * a3;
                cI = [];
                dH = [];
                dJ = (a2 * a3) / 2;
                var cO, c4;
                var de = 0;
                var da;
                da = dU - dJ;
                var di;
                c4 = Math.pow(numbPtsInSingleCycle / 2, 2);
                di = (a2 * a3) / c4;
                for (db = 0; db < A; db++) {
                    for (dc = 0; dc < numbPtsInSingleCycle; dc++) {
                        temp = dc + db * numbPtsInSingleCycle;
                        dH[temp] = temp;
                        cS = di * Math.pow(dc - numbPtsInSingleCycle / 2 - de, 2) + da;
                        cI[temp] = 20 + cS;
                    }
                }
                V = new pps(a2 * 0.5 * a3, dt, dU);
                cx = aK.width;
                F = aK.height;
                b1.clearRect(0, 0, cx, F);
                $("#canvas_dte").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                dacoc(dw, cI, dH, dt);
                datm(dw, dH, dt, 0, dU, a3);
                d9drldto(dw, cI, dH, dt, A / 2);
            }
            if (dm === "SCALLOPS") {
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                c9 = cC * a3 * Math.PI;
                numbPtsInSingleCycle = Math.floor(c9 / A + 0.5);
                dt = A * numbPtsInSingleCycle;
                dX = a2 / 25.4;
                dX = Math.ceil(dX);
                dU = dX * 25.4 * a3 + 3 * 25.4 * a3;
                cI = [];
                dH = [];
                dJ = (a2 * a3) / 2;
                var dG, cV;
                var dM = 0;
                var dY;
                cV = Math.pow(numbPtsInSingleCycle / 2, 2);
                dY = (a2 * a3) / cV;
                for (db = 0; db < A; db++) {
                    for (dc = 0; dc < numbPtsInSingleCycle; dc++) {
                        temp = dc + db * numbPtsInSingleCycle;
                        dH[temp] = temp;
                        cS = -1 * dY * Math.pow(dc - numbPtsInSingleCycle / 2 - dM, 2);
                        cI[temp] = cS + dU + dJ;
                    }
                }
                V = new pps(a2 * 0.5 * a3, dt, dU);
                cx = aK.width;
                F = aK.height;
                b1.clearRect(0, 0, cx, F);
                $("#canvas_dte").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + cC.toFixed(1) + "mm [" + (cC / 25.4).toFixed(3) + '"] O.D.', 4 * a3, 24 * a3);
                dacoc(dw, cI, dH, dt);
                datm(dw, dH, dt, 0, dU + dJ, a3);
                d9drldto(dw, cI, dH, dt, A / 2);
            }
            if (dm === "GUSSET_EDGE_METHOD") {
                var dg = Math.sqrt(cD * cD + aA * aA - 2 * cD * aA * Math.cos(Math.radians(C)));
                console.log("Dimension C, third leg of the 'edge' triangle, in mm: " + dg.toFixed(1));
                E = Math.asin((cD * Math.sin(Math.radians(C))) / dg);
                aX = Math.asin((aA * Math.sin(Math.radians(C))) / dg);
                U = Math.degrees(E);
                bf = Math.degrees(aX);
                console.log("Angle A in degrees: " + U.toFixed(1) + "     Angle B in degrees: " + bf.toFixed(1));
                var cZ = bZ / 2 / Math.tan(E);
                var cK = ak / 2 / Math.cos(Math.PI / 2 - E);
                var c0 = bZ / 2 / Math.tan(aX);
                var cM = cc / 2 / Math.cos(Math.PI / 2 - aX);
                a6 = dg - cZ + cK - c0 + cM;
                dU = a6 * a3;
                c9 = bZ * a3 * Math.PI;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                V = new pps((1 * 25.4) / a3, dt, dU);
                b5 = aj.width;
                n = aj.height;
                bB.clearRect(0, 0, b5, n);
                $("#canvas_rtb").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This brace tube is " + bZ.toFixed(1) + "mm [" + (bZ / 25.4).toFixed(3) + '"] O.D.      ( ' + aM.toFixed(1) + "mm [" + (aM / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                dw.fillText("It fits between a tube of " + cc.toFixed(1) + "mm [" + (cc / 25.4).toFixed(3) + '"].', 4 * a3, 28 * a3);
                dw.fillText("and a tube of " + ak.toFixed(1) + "mm [" + (ak / 25.4).toFixed(3) + '"].', 4 * a3, 32 * a3);
                dw.fillText("The angle between the two reference tubes is " + C.toFixed(1) + " degrees.", 4 * a3, 36 * a3);
                dw.fillText("Edge reference measurements are: " + cD.toFixed(1) + "mm [" + (cD / 25.4).toFixed(3) + '"] and ' + aA.toFixed(1) + "mm [" + (aA / 25.4).toFixed(3) + '"]', 4 * a3, 40 * a3);
                dw.fillText("<-- CL intersection to CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / a3 / 25.4).toFixed(1) + " in. ] ", 4 * a3, 54 * a3);
                if (bf % 90 === 0) {
                    bf = bf - 0.00001;
                }
                if (U % 90 === 0) {
                    U = U - 0.00001;
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / bZ) * 2;
                    dR = (bZ / 2) * Math.cos(dS);
                    cG = (bZ / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(cc / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((bf / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((bf / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((bf / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dH[dc] = dc;
                    cI[dc] = dU - cN * a3;
                    dR = ((bZ - 2 * aM) / 2) * Math.cos(dS);
                    cG = ((bZ - 2 * aM) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(cc / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((bf / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((bf / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((bf / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = dU - cN * a3;
                }
                aE = cI[0];
                T = cI[dt - 1];
                doiaocla(dw, 0, cI, dZ, dH, aM, dt);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / bZ) * 2;
                    dR = (bZ / 2) * Math.cos(dS);
                    cG = (bZ / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(ak / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((U / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((U / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((U / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dH[dc] = dc;
                    cI[dc] = cN * a3;
                    dR = ((bZ - 2 * aM) / 2) * Math.cos(dS);
                    cG = ((bZ - 2 * aM) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(ak / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((U / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((U / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((U / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = cN * a3;
                }
                doiaocla(dw, 0, cI, dZ, dH, aM, dt);
                dw.beginPath();
                dw.moveTo(aE, 0);
                dw.lineTo(cI[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(T, dH[dt - 1]);
                dw.lineTo(cI[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
            }
            if (dm === "GUSSET_BISECTOR_METHOD") {
                U = (180 - C) / 2;
                bf = U;
                a6 = aZ;
                dU = a6 * a3;
                c9 = bZ * a3 * Math.PI;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                if (bf % 90 === 0) {
                    bf = bf - 0.00001;
                }
                if (U % 90 === 0) {
                    U = U - 0.00001;
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / bZ) * 2;
                    dR = (bZ / 2) * Math.cos(dS);
                    cG = (bZ / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(cc / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((bf / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((bf / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((bf / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dH[dc] = dc;
                    cI[dc] = dU - cN * a3;
                    dR = ((bZ - 2 * aM) / 2) * Math.cos(dS);
                    cG = ((bZ - 2 * aM) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(cc / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((bf / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((bf / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((bf / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = dU - cN * a3;
                }
                V = new pps((1 * 25.4) / a3, dt, dU);
                b5 = aj.width;
                n = aj.height;
                bB.clearRect(0, 0, b5, n);
                $("#canvas_rtb").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This brace tube is " + bZ.toFixed(1) + "mm [" + (bZ / 25.4).toFixed(3) + '"] O.D.      ( ' + aM.toFixed(1) + "mm [" + (aM / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                dw.fillText("It fits between a tube of " + cc.toFixed(1) + "mm [" + (cc / 25.4).toFixed(3) + '"].', 4 * a3, 28 * a3);
                dw.fillText("and a tube of " + ak.toFixed(1) + "mm [" + (ak / 25.4).toFixed(3) + '"].', 4 * a3, 32 * a3);
                dw.fillText("The angle between the two reference tubes is " + C.toFixed(1) + " degrees.", 4 * a3, 36 * a3);
                dw.fillText("The brace has centerline to centerline length of : " + aZ.toFixed(1) + "mm [" + (aZ / 25.4).toFixed(3) + '"] ', 4 * a3, 40 * a3);
                dw.fillText("<-- CL intersection to CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / a3 / 25.4).toFixed(1) + " in. ] ", 4 * a3, 54 * a3);
                aE = cI[0];
                T = cI[dt - 1];
                doiaocla(dw, 0, cI, dZ, dH, aM, dt);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / bZ) * 2;
                    dR = (bZ / 2) * Math.cos(dS);
                    cG = (bZ / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(ak / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((U / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((U / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((U / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dH[dc] = dc;
                    cI[dc] = cN * a3;
                    dR = ((bZ - 2 * aM) / 2) * Math.cos(dS);
                    cG = ((bZ - 2 * aM) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(ak / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((U / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((U / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((U / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = cN * a3;
                }
                doiaocla(dw, 0, cI, dZ, dH, aM, dt);
                dw.beginPath();
                dw.moveTo(aE, 0);
                dw.lineTo(cI[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(T, dH[dt - 1]);
                dw.lineTo(cI[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
            }
            if (dm === "ROUND_TO_SQUARE_TUBE_METHOD") {
                c9 = bK * a3 * Math.PI;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                cz = 1000000;
                ao = 0;
                cI = [];
                dH = [];
                if (a8 % 90 === 0) {
                    a8 = a8 - 0.00001;
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / bK) * 2;
                    dR = (bK / 2) * Math.cos(dS);
                    cG = (bK / 2) * Math.sin(dS);
                    if (cG + cm > 0) {
                        du = aQ / 2 / Math.sin(Math.radians(e)) - (cG + cm) * Math.tan(Math.radians(e));
                    } else {
                        du = aQ / 2 / Math.sin(Math.radians(e)) + (cG + cm) * Math.tan(Math.radians(e));
                    }
                    dF = dR / Math.cos((a8 / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((a8 / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((a8 / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    if (cN > ao) {
                        ao = cN;
                    }
                    if (cN < cz) {
                        cz = cN;
                    }
                    dH[dc] = dc;
                    cI[dc] = -1 * (cN * a3);
                    dR = ((bK - 2 * g) / 2) * Math.cos(dS);
                    cG = ((bK - 2 * g) / 2) * Math.sin(dS);
                    if (cG + cm > 0) {
                        du = aQ / 2 / Math.sin(Math.radians(e)) - (cG + cm) * Math.tan(Math.radians(e));
                    } else {
                        du = aQ / 2 / Math.sin(Math.radians(e)) + (cG + cm) * Math.tan(Math.radians(e));
                    }
                    dF = dR / Math.cos((a8 / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((a8 / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((a8 / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = -1 * (cN * a3);
                }
                dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                V = new pps(ao * a3, dt, dU);
                bv = Y.width;
                bY = Y.height;
                aw.clearRect(0, 0, bv, bY);
                $("#canvas_rtsm").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + bK.toFixed(1) + "mm [" + (bK / 25.4).toFixed(3) + '"] O.D.      ( ' + g.toFixed(1) + "mm [" + (g / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                dw.fillText("     w/ circumference of " + (Math.PI * bK).toFixed(1) + "mm [" + ((Math.PI * bK) / 25.4).toFixed(3) + '"].', 4 * a3, 28 * a3);
                dw.fillText("Mating square tube has cross sectional width of " + aQ.toFixed(1) + "mm [" + (aQ / 25.4).toFixed(3) + '"] at ' + a8.toFixed(1) + " degrees.", 4 * a3, 32 * a3);
                dw.fillText("Square tube face is oriented at " + e.toFixed(1) + " degrees.", 4 * a3, 36 * a3);
                dw.fillText("Tube offset (CL/CL) is " + cm.toFixed(1) + "mm [" + (cm / 25.4).toFixed(3) + '"] .', 4 * a3, 40 * a3);
                dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                doiaocla(dw, dU, cI, dZ, dH, a5, dt);
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(dU + cI[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt - 1]);
                dw.lineTo(dU + cI[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
            }
            if (dm === "SEAT_STAY_JOINT") {
                var cP = Math.sin(((bV / 360) * 2 * Math.PI) / 2) * 10;
                var dA = Math.cos(((bV / 360) * 2 * Math.PI) / 2) * 10;
                var c5 = Math.sin((bS / 360) * 2 * Math.PI) * dA;
                var cT = Math.cos((bS / 360) * 2 * Math.PI) * dA;
                var cY = Math.sqrt(Math.pow(cP, 2) + Math.pow(c5, 2));
                var dQ = Math.asin(cY / 10);
                var cH = Math.degrees(dQ);
                af = cH;
                var cF = Math.atan(cP / c5);
                var cU = Math.degrees(cF);
                var dL = (ss2st_BaseTubeOD * Math.PI * cU) / 360;
                var dp = k + bF;
                var dh = (dp / (ss2st_BaseTubeOD * Math.PI)) * 360;
                var dE = (dh - cU) / 2;
                var ds = (Math.sin((dE / 360) * 2 * Math.PI) * ss2st_BaseTubeOD) / 2;
                co = ds;
                if (z === "right") {
                    co = co * -1;
                }
                c9 = bF * a3 * Math.PI;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                if (af % 90 === 0) {
                    af = af - 0.00001;
                }
                cz = 1000000;
                ao = 0;
                cI = [];
                dH = [];
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / bF) * 2;
                    dR = (bF / 2) * Math.cos(dS);
                    cG = (bF / 2) * Math.sin(dS);
                    du = Math.sqrt((ss2st_BaseTubeOD / 2) * (ss2st_BaseTubeOD / 2) - (cG + co) * (cG + co));
                    dF = dR / Math.cos((af / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((af / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((af / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    if (cN > ao) {
                        ao = cN;
                    }
                    if (cN < cz) {
                        cz = cN;
                    }
                    dH[dc] = dc;
                    cI[dc] = -1 * (cN * a3);
                    dR = ((bF - 2 * b9) / 2) * Math.cos(dS);
                    cG = ((bF - 2 * b9) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(ss2st_BaseTubeOD / 2, 2) - Math.pow(cG + co, 2));
                    dF = dR / Math.cos((af / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((af / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((af / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = -1 * (cN * a3);
                }
                dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                V = new pps(-0.25 * ao * a3, dt, dU);
                f = bu.width;
                am = bu.height;
                at.clearRect(0, 0, f, am);
                $("#canvas_ss2st").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This seat stay is " + bF.toFixed(1) + "mm [" + (bF / 25.4).toFixed(3) + '"] O.D.      ( ' + b9.toFixed(1) + "mm [" + (b9 / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                if (z === "left") {
                    dw.fillText("Tube offset (CL/CL) is " + co.toFixed(1) + " mm [" + (co / 25.4).toFixed(3) + '"] (Left side Seat Stay) ', 4 * a3, 28 * a3);
                } else {
                    dw.fillText("Tube offset (CL/CL) is " + co.toFixed(1) + " mm [" + (co / 25.4).toFixed(3) + '"] (Right side Seat Stay) ', 4 * a3, 28 * a3);
                }
                dw.fillText("Mating Tube (Seat Tube) is " + ss2st_BaseTubeOD.toFixed(1) + "mm [" + (ss2st_BaseTubeOD / 25.4).toFixed(3) + '"] O.D. at ' + af.toFixed(1) + " degrees (true).", 4 * a3, 32 * a3);
                dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                doiaocla(dw, dU, cI, dZ, dH, a5, dt);
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(dU + cI[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt - 1]);
                dw.lineTo(dU + cI[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
            }
            if (dm === "ELLIPTICAL_TO_ROUND") {
                circumference_in_mm = poae(otrt_CutTubeMajAxis, otrt_CutTubeMinAxis);
                c9 = circumference_in_mm * a3;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                console.log("Ellipse circumference in mm: " + circumference_in_mm + "   Circumference in dots: " + c9 + "  maxNumberOfPoints: " + dt);
                cz = 1000000;
                ao = 0;
                cI = [];
                dH = [];
                if (otrt_Angle % 90 === 0) {
                    otrt_Angle = otrt_Angle - 0.00001;
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / circumference_in_mm) * 2 * Math.PI;
                    if (which_axis_parallel_baseTube === "minor") {
                        dR = (otrt_CutTubeMinAxis / 2) * Math.cos(dS);
                        cG = (otrt_CutTubeMajAxis / 2) * Math.sin(dS);
                    } else {
                        dR = (otrt_CutTubeMajAxis / 2) * Math.cos(dS);
                        cG = (otrt_CutTubeMinAxis / 2) * Math.sin(dS);
                    }
                    du = Math.sqrt((otrt_BaseTubeOD / 2) * (otrt_BaseTubeOD / 2) - (cG + otrt_Offset) * (cG + otrt_Offset));
                    if (isNaN(du)) {
                        du = 0;
                    }
                    dF = dR / Math.cos((otrt_Angle / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((otrt_Angle / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((otrt_Angle / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    if (cN > ao) {
                        ao = cN;
                    }
                    if (cN < cz) {
                        cz = cN;
                    }
                    dH[dc] = dc;
                    cI[dc] = -1 * (cN * a3);
                    if (which_axis_parallel_baseTube === "minor") {
                        dR = (otrt_CutTubeMinAxis / 2 - otrt_MatlThickness) * Math.cos(dS);
                        cG = (otrt_CutTubeMajAxis / 2 - otrt_MatlThickness) * Math.sin(dS);
                    } else {
                        dR = (otrt_CutTubeMajAxis / 2 - otrt_MatlThickness) * Math.cos(dS);
                        cG = (otrt_CutTubeMinAxis / 2 - otrt_MatlThickness) * Math.sin(dS);
                    }
                    du = Math.sqrt(Math.pow(otrt_BaseTubeOD / 2, 2) - Math.pow(cG + otrt_Offset, 2));
                    dF = dR / Math.cos((otrt_Angle / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((otrt_Angle / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((otrt_Angle / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dZ[dc] = -1 * (cN * a3);
                }
                dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                if (
                    (which_axis_parallel_baseTube === "major" && otrt_CutTubeMinAxis + Math.abs(otrt_Offset) > otrt_BaseTubeOD) ||
                    (which_axis_parallel_baseTube === "minor" && otrt_CutTubeMajAxis + Math.abs(otrt_Offset) > otrt_BaseTubeOD)
                ) {
                    V = new pps(ao * a3 * 0.5, dt, dU * 1.5);
                    t = bz.width;
                    J = bz.height;
                    bU.clearRect(0, 0, t, J);
                    $("#canvas_otrt").attr({ width: V.width, height: V.height });
                } else {
                    V = new pps(ao * a3 * 0.25, dt, dU);
                    t = bz.width;
                    J = bz.height;
                    bU.clearRect(0, 0, t, J);
                    $("#canvas_otrt").attr({ width: V.width, height: V.height });
                }
                phop(dw, dm, a3);
                dw.fillText(
                    "This elliptical tube is " +
                        otrt_CutTubeMajAxis.toFixed(1) +
                        " by " +
                        otrt_CutTubeMinAxis.toFixed(1) +
                        "mm [" +
                        (otrt_CutTubeMajAxis / 25.4).toFixed(3) +
                        " by " +
                        (otrt_CutTubeMinAxis / 25.4).toFixed(3) +
                        '"] O.D.      ( ' +
                        otrt_MatlThickness.toFixed(1) +
                        "mm [" +
                        (otrt_MatlThickness / 25.4).toFixed(3) +
                        '"] wall)',
                    4 * a3,
                    24 * a3
                );
                dw.fillText("     This tube is oriented with its " + which_axis_parallel_baseTube + " axis parallel to the base tube centerline.", 4 * a3, 28 * a3);
                dw.fillText("Mating Tube is " + otrt_BaseTubeOD.toFixed(1) + "mm [" + (otrt_BaseTubeOD / 25.4).toFixed(3) + '"] O.D. at ' + otrt_Angle.toFixed(1) + " degrees.", 4 * a3, 32 * a3);
                dw.fillText("Tube offset (CL/CL) is " + otrt_Offset.toFixed(1) + "mm [" + (otrt_Offset / 25.4).toFixed(3) + '"] .', 4 * a3, 36 * a3);
                dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                doiaocla(dw, dU, cI, dZ, dH, a5, dt);
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(dU + cI[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt - 1]);
                dw.lineTo(dU + cI[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
                if (
                    (which_axis_parallel_baseTube === "major" && otrt_CutTubeMinAxis + Math.abs(otrt_Offset) > otrt_BaseTubeOD) ||
                    (which_axis_parallel_baseTube === "minor" && otrt_CutTubeMajAxis + Math.abs(otrt_Offset) > otrt_BaseTubeOD)
                ) {
                    otrt_Angle = 180 + otrt_Angle;
                    otrt_Offset = otrt_Offset * -1;
                    if (otrt_Angle % 90 === 0) {
                        otrt_Angle = otrt_Angle - 0.00001;
                    }
                    for (dc = 0; dc < dt; dc++) {
                        dv = dc / a3;
                        dS = (dv / circumference_in_mm) * 2 * Math.PI;
                        if (which_axis_parallel_baseTube === "minor") {
                            dR = (otrt_CutTubeMinAxis / 2) * Math.cos(dS);
                            cG = (otrt_CutTubeMajAxis / 2) * Math.sin(dS);
                        } else {
                            dR = (otrt_CutTubeMajAxis / 2) * Math.cos(dS);
                            cG = (otrt_CutTubeMinAxis / 2) * Math.sin(dS);
                        }
                        du = Math.sqrt((otrt_BaseTubeOD / 2) * (otrt_BaseTubeOD / 2) - (cG + otrt_Offset) * (cG + otrt_Offset));
                        if (isNaN(du)) {
                            du = 0;
                        }
                        dF = dR / Math.cos((otrt_Angle / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((otrt_Angle / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((otrt_Angle / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dH[dc] = dc;
                        cI[dc] = dU - cN * a3;
                        if (which_axis_parallel_baseTube === "minor") {
                            dR = (otrt_CutTubeMinAxis / 2 - otrt_MatlThickness) * Math.cos(dS);
                            cG = (otrt_CutTubeMajAxis / 2 - otrt_MatlThickness) * Math.sin(dS);
                        } else {
                            dR = (otrt_CutTubeMajAxis / 2 - otrt_MatlThickness) * Math.cos(dS);
                            cG = (otrt_CutTubeMinAxis / 2 - otrt_MatlThickness) * Math.sin(dS);
                        }
                        du = Math.sqrt(Math.pow(otrt_BaseTubeOD / 2, 2) - Math.pow(cG + otrt_Offset, 2));
                        dF = dR / Math.cos((otrt_Angle / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((otrt_Angle / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((otrt_Angle / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dZ[dc] = dU - cN * a3;
                    }
                    doiaocla(dw, 0, cI, dZ, dH, a5, dt);
                    dw.beginPath();
                    dw.moveTo(cI[0], dH[0]);
                    dw.lineTo(dU * 1.5, dH[0]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(cI[dt - 1], dH[dt - 1]);
                    dw.lineTo(dU * 1.5, dH[dt - 1]);
                    dw.stroke();
                    datm(dw, dH, dt, dU, dU * 1.5, a3);
                    dw.beginPath();
                    dw.moveTo(dU + 50, dH[dt / 4]);
                    dw.lineTo(dU * 1.5, dH[dt / 4]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(dU + 50, dH[dt / 2]);
                    dw.lineTo(dU * 1.5, dH[dt / 2]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(dU + 50, dH[(dt / 4) * 3]);
                    dw.lineTo(dU * 1.5, dH[(dt / 4) * 3]);
                    dw.stroke();
                }
            }
            if (dm === "ROUND_TO_FLAT_MATERIAL") {
                if (aP === "tube") {
                    c9 = cv * a3 * Math.PI;
                    dt = Math.floor(c9 + 0.5);
                    c6 = Math.floor(c9 / 4 + 0.5);
                    dt = 4 * c6;
                    cz = 1000000;
                    ao = 0;
                    cI = [];
                    dH = [];
                    if (b4 % 90 === 0) {
                        b4 = b4 - 0.00001;
                    }
                    for (dc = 0; dc < dt; dc++) {
                        dv = dc / a3;
                        dS = (dv / cv) * 2;
                        dF = (cv / 2) * Math.cos(dS);
                        dT = dF / Math.tan(Math.radians(b4));
                        if (dT > ao) {
                            ao = dT;
                        }
                        if (dT < cz) {
                            cz = dT;
                        }
                        dH[dc] = dc;
                        cI[dc] = -1 * (dT * a3);
                        dF = ((cv - 2 * G) / 2) * Math.cos(dS);
                        dT = dF / Math.tan(Math.radians(b4));
                        dZ[dc] = -1 * (dT * a3);
                    }
                    dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                    V = new pps(ao * a3, dt, dU);
                    bG = ai.width;
                    cf = ai.height;
                    aH.clearRect(0, 0, bG, cf);
                    $("#canvas_rtfm").attr({ width: V.width, height: V.height });
                    phop(dw, dm, a3);
                    dw.fillText("This tube is " + cv.toFixed(1) + "mm [" + (cv / 25.4).toFixed(3) + '"] O.D.      ( ' + G.toFixed(1) + "mm [" + (G / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                    dw.fillText("Tube to flat plate angle is : " + b4.toFixed(1) + " degrees.", 4 * a3, 28 * a3);
                    dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                    dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                    doiaocla(dw, dU, cI, dZ, dH, a5, dt);
                    dw.beginPath();
                    dw.moveTo(0, 0);
                    dw.lineTo(dU + cI[0], dH[0]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[dt - 1]);
                    dw.lineTo(dU + cI[dt - 1], dH[dt - 1]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(dU, 0);
                    dw.lineTo(dU, dH[dt - 1]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, 0);
                    dw.lineTo(0, dH[dt - 1]);
                    dw.stroke();
                    datm(dw, dH, dt, 0, dU, a3);
                    dw.beginPath();
                    dw.moveTo(0, dH[dt / 4]);
                    dw.lineTo(dU + 50, dH[dt / 4]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[dt / 2]);
                    dw.lineTo(dU + 50, dH[dt / 2]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[(dt / 4) * 3]);
                    dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                    dw.stroke();
                }
                if (aP === "endCap" || aP === "thruHole") {
                    dI = cv + 2 * au;
                    dP = (dI / 2) * a3;
                    dz = (cv + 2 * au) / Math.sin(Math.radians(b4));
                    dr = (dz / 2) * a3;
                    dC = 3 * 25.4 * a3;
                    dO = 5 * 25.4 * a3;
                    V = new pps(0, 0, 0);
                    bG = ai.width;
                    cf = ai.height;
                    aH.clearRect(0, 0, bG, cf);
                    $("#canvas_rtfm").attr({ width: V.width, height: V.height });
                    phop(dw, dm, a3);
                    if (aP === "endCap") {
                        dw.fillText("This endcap is designed for a tube " + cv.toFixed(1) + "mm [" + (cv / 25.4).toFixed(3) + '"] O.D. cut at an angle of: ' + b4.toFixed(1) + " degrees.", 4 * a3, 24 * a3);
                        dw.fillText("End Cap Undersize Allowance: " + au.toFixed(1) + "mm [" + (au / 25.4).toFixed(3) + '"] Neg # = undersized, Pos # = oversized. ', 4 * a3, 28 * a3);
                        dw.fillText("Minor Axis: " + dI.toFixed(1) + "mm [" + (dI / 25.4).toFixed(3) + '"] , Major Axis: ' + dz.toFixed(1) + "mm [" + (dz / 25.4).toFixed(3) + '"]', 4 * a3, 32 * a3);
                    }
                    if (aP === "thruHole") {
                        dw.fillText("This through hole represents a tube " + cv.toFixed(1) + "mm [" + (cv / 25.4).toFixed(3) + '"] O.D. meeting a flat plate at an angle of: ' + b4.toFixed(1) + " degrees.", 4 * a3, 24 * a3);
                        dw.fillText("With Clearance Allowance : " + au.toFixed(1) + "mm [" + (au / 25.4).toFixed(3) + '"] ', 4 * a3, 28 * a3);
                        dw.fillText("Flat Plate Material Thickness (if applicable) : " + cl.toFixed(1) + "mm [" + (cl / 25.4).toFixed(3) + '"] ', 4 * a3, 32 * a3);
                        dw.fillText("Minor Axis: " + dI.toFixed(1) + "mm [" + (dI / 25.4).toFixed(3) + '"] , Major Axis: ' + dz.toFixed(1) + "mm [" + (dz / 25.4).toFixed(3) + '"]', 4 * a3, 36 * a3);
                        if (au < 0) {
                            alert("Oops.  The clearance allowance on this flat plate thru hole is negative.  That means you are going to have an interference fit to your tube.  Is that really what you intended?");
                        }
                    }
                    dw.lineWidth = 1.2;
                    dw.strokeStyle = "#000000";
                    dw.beginPath();
                    drawEllipse(dw, dC, dO, dr, dP, 0);
                    dw.stroke();
                    if (b4 % 90 === 0) {
                        b4 = b4 - 0.00001;
                    }
                    if (cl !== 0 && aP === "thruHole") {
                        dW = cl / Math.tan(Math.radians(b4));
                        dw.lineWidth = 1.2;
                        dw.strokeStyle = "#00ff00";
                        dw.beginPath();
                        drawEllipse(dw, dC, dO + dW * a3, dr, dP, 0);
                        dw.stroke();
                        dw.strokeStyle = "#000000";
                    }
                    dw.beginPath();
                    dw.moveTo(dC, dO + dr + 50);
                    dw.lineTo(dC, dO - dr - 50);
                    dw.stroke();
                    dw.moveTo(dC + dP + 50, dO);
                    dw.lineTo(dC - dP - 50, dO);
                    dw.stroke();
                }
            }
            if (dm === "COLLECTOR") {
                if (bs === "decorative_point" || bs === "exh_collect") {
                    c9 = cy * a3 * Math.PI;
                    dt = Math.floor(c9 + 0.5);
                    c6 = Math.floor(c9 / 4 + 0.5);
                    dt = 4 * c6;
                    cz = 1000000;
                    ao = 0;
                    cI = [];
                    dH = [];
                    dZ = [];
                    if (bJ % 90 === 0) {
                        bJ = bJ - 0.00001;
                    }
                    ang_VX_degrees = (180 - 360 / ax) / 2;
                    if (ang_VX_degrees % 90 === 0) {
                        ang_VX_degrees = ang_VX_degrees - 0.00001;
                    }
                    for (dc = 0; dc < dt; dc++) {
                        dv = dc / a3;
                        dS = (dv / cy) * 2;
                        dR = (cy / 2) * Math.cos(dS);
                        cG = (cy / 2) * Math.sin(dS);
                        du = Math.abs(cG * Math.tan(Math.radians(ang_VX_degrees)));
                        dF = dR / Math.cos((bJ / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((bJ / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((bJ / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        if (cN > ao) {
                            ao = cN;
                        }
                        if (cN < cz) {
                            cz = cN;
                        }
                        dH[dc] = dc;
                        cI[dc] = -1 * (cN * a3);
                        dR = ((cy - 2 * y) / 2) * Math.cos(dS);
                        cG = ((cy - 2 * y) / 2) * Math.sin(dS);
                        du = Math.abs(cG * Math.tan(Math.radians(ang_VX_degrees)));
                        dF = dR / Math.cos((bJ / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((bJ / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((bJ / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dZ[dc] = -1 * (cN * a3);
                    }
                    dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                    if (bs === "exh_collect") {
                        if (bJ < 30 && bJ >= 20) {
                            dU += Math.round(cy / 50) * 25.4 * a3;
                        }
                        if (bJ < 20 && bJ >= 10) {
                            dU += Math.round(cy / 25) * 25.4 * a3;
                        }
                    }
                    V = new pps(ao * a3, dt, dU);
                    cd = ap.width;
                    q = ap.height;
                    bE.clearRect(0, 0, cd, q);
                    $("#canvas_col").attr({ width: V.width, height: V.height });
                    phop(dw, dm, a3);
                    if (bs === "decorative_point") {
                        dw.fillText("This collector feed tube is " + cy.toFixed(1) + "mm [" + (cy / 25.4).toFixed(3) + '"] O.D.      ( ' + y.toFixed(1) + "mm [" + (y / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                        dw.fillText(bJ.toFixed(1) + " Degree Angle Between Single Feed Tube and Collector Group Central Axis.", 4 * a3, 28 * a3);
                        dw.fillText("Number of Feed Tubes in the Collector Group: " + ax, 4 * a3, 32 * a3);
                    }
                    if (bs === "exh_collect") {
                        dw.fillText("This collector feed tube is " + cy.toFixed(1) + "mm [" + (cy / 25.4).toFixed(3) + '"] O.D.      ( ' + y.toFixed(1) + "mm [" + (y / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                        dw.fillText("It mates to a common collector tube: " + ah.toFixed(1) + "mm [" + (ah / 25.4).toFixed(3) + '"] O.D.      ( ' + aR.toFixed(1) + "mm [" + (aR / 25.4).toFixed(3) + '"] wall)', 4 * a3, 28 * a3);
                        dw.fillText(bJ.toFixed(1) + " Degree Angle Between Single Feed Tube and Collector Group Central Axis.", 4 * a3, 32 * a3);
                        dw.fillText("Number of Feed Tubes in the Collector Group: " + ax + " Collector match up extra land: " + az.toFixed(1) + "mm", 4 * a3, 36 * a3);
                        if (aR === 0) {
                            alert("Oops.  The material thickness of the common collector tube is zero.  Is that what you intended?  If that dimension is zero, the feeder tube calculator won't have enough material for a good bond.");
                        }
                    }
                    dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                    dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                    doiaocla(dw, dU, cI, dZ, dH, y, dt);
                    dw.beginPath();
                    dw.moveTo(0, 0);
                    dw.lineTo(dU + cI[0], dH[0]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[dt - 1]);
                    dw.lineTo(dU + cI[dt - 1], dH[dt - 1]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(dU, 0);
                    dw.lineTo(dU, dH[dt - 1]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, 0);
                    dw.lineTo(0, dH[dt - 1]);
                    dw.stroke();
                    datm(dw, dH, dt, 0, dU, a3);
                    dw.beginPath();
                    dw.moveTo(0, dH[dt / 4]);
                    dw.lineTo(dU + 50, dH[dt / 4]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[dt / 2]);
                    dw.lineTo(dU + 250, dH[dt / 2]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[(dt / 4) * 3]);
                    dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                    dw.stroke();
                }
                if (bs === "exh_collect") {
                    if (bJ % 90 === 0) {
                        bJ = bJ - 0.00001;
                    }
                    var df = 0;
                    for (dc = 0; dc < dt; dc++) {
                        dv = dc / a3;
                        dS = (dv / cy) * 2;
                        dR = (cy / 2) * Math.cos(dS);
                        cG = (cy / 2) * Math.sin(dS);
                        du = Math.sqrt((ah / 2) * (ah / 2) - cG * cG);
                        dF = dR / Math.cos(Math.radians(bJ));
                        dT = dR * Math.tan(Math.radians(bJ));
                        cL = (dF + du) / Math.sin(Math.radians(bJ));
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dH[dc] = dc;
                        cI[dc] = dU - cN * a3 - df * a3;
                        dR = (cy / 2) * Math.cos(dS);
                        cG = (cy / 2) * Math.sin(dS);
                        du = Math.sqrt(Math.pow(ah / 2 - aR - az, 2) - Math.pow(cG, 2));
                        if (isNaN(du)) {
                            du = 0;
                        }
                        dF = dR / Math.cos(Math.radians(bJ));
                        dT = dR * Math.tan(Math.radians(bJ));
                        cL = (dF + du) / Math.sin(Math.radians(bJ));
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dZ[dc] = dU - cN * a3 - df * a3;
                    }
                    dw.lineWidth = 1.2;
                    dw.strokeStyle = "#000000";
                    dw.beginPath();
                    var dk = dt / 4;
                    var dd = (dt / 4) * 3;
                    dw.moveTo(cI[dk - 1], dH[dk - 1]);
                    for (dc = dk; dc < dd; dc++) {
                        dw.lineTo(cI[dc], dH[dc]);
                    }
                    dw.stroke();
                    dw.lineWidth = 1;
                    dw.strokeStyle = "#ff0000";
                    dw.beginPath();
                    dw.moveTo(dZ[dk - 1], dH[dk - 1]);
                    for (dc = dk; dc < dd; dc++) {
                        dw.lineTo(dZ[dc], dH[dc]);
                    }
                    dw.stroke();
                }
                if (bs === "common_output_tube") {
                    c9 = ah * a3 * Math.PI;
                    dt = Math.floor(c9 + 0.5);
                    c6 = Math.floor(c9 / 4 + 0.5);
                    dt = 4 * c6;
                    cz = 1000000;
                    ao = 0;
                    cI = [];
                    dH = [];
                    dZ = [];
                    if (bJ % 90 === 0) {
                        bJ = bJ - 0.00001;
                    }
                    for (dc = 0; dc < dt; dc++) {
                        dv = dc / a3;
                        dS = (dv / ah) * 2;
                        dR = (ah / 2) * Math.cos(dS);
                        cG = (ah / 2) * Math.sin(dS);
                        du = Math.sqrt(Math.pow(cy / 2, 2) - Math.pow(cG, 2));
                        dF = dR / Math.cos((bJ / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((bJ / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((bJ / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        if (cN > ao) {
                            ao = cN;
                        }
                        if (cN < cz) {
                            cz = cN;
                        }
                        dH[dc] = dc;
                        cI[dc] = -1 * (cN * a3);
                        dR = ((ah - 2 * aR) / 2) * Math.cos(dS);
                        cG = ((ah - 2 * aR) / 2) * Math.sin(dS);
                        du = Math.sqrt(Math.pow(cy / 2, 2) - Math.pow(cG, 2));
                        dF = dR / Math.cos((bJ / 360) * 2 * Math.PI);
                        dT = dR * Math.tan((bJ / 360) * 2 * Math.PI);
                        cL = (dF + du) / Math.sin((bJ / 360) * 2 * Math.PI);
                        cN = cL - dT;
                        if (isNaN(cN)) {
                            cN = 0;
                        }
                        dZ[dc] = -1 * (cN * a3);
                    }
                    dU = 4 * 25.4 * a3;
                    V = new pps(ao * a3, dt, dU);
                    cd = ap.width;
                    q = ap.height;
                    bE.clearRect(0, 0, cd, q);
                    $("#canvas_col").attr({ width: V.width, height: V.height });
                    phop(dw, dm, a3);
                    dw.fillText("This common collector tube: " + ah.toFixed(1) + "mm [" + (ah / 25.4).toFixed(3) + '"] O.D.      ( ' + aR.toFixed(1) + "mm [" + (aR / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                    dw.fillText("Mates to collector feed tubes of " + cy.toFixed(1) + "mm [" + (cy / 25.4).toFixed(3) + '"] O.D.      ( ' + y.toFixed(1) + "mm [" + (y / 25.4).toFixed(3) + '"] wall)', 4 * a3, 28 * a3);
                    dw.fillText(bJ.toFixed(1) + " Degree Angle Between Single Feed Tube and Collector Group Central Axis.", 4 * a3, 32 * a3);
                    dw.fillText("Number of Feed Tubes in the Collector Group: " + ax, 4 * a3, 36 * a3);
                    dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                    dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                    dw.lineWidth = 1.2;
                    dw.strokeStyle = "#000000";
                    var dK = (dt / ax).toFixed(0);
                    var cJ = dt / 2 - (dK / 2).toFixed(0);
                    var c8;
                    var dj;
                    for (db = 0; db < ax; db++) {
                        c8 = ((dt / 2 - (dK / 2).toFixed(0) + db * dK) % dt).toFixed(0);
                        dw.beginPath();
                        dw.moveTo(dU + cI[cJ], dH[c8]);
                        for (dc = 1; dc < dK * 1 + 1; dc++) {
                            if (((c8 * 1 + dc * 1) % dt).toFixed(0) >= dt - 1) {
                            }
                            if (((c8 * 1 + dc * 1) % dt).toFixed(0) <= 0.5) {
                                dw.stroke();
                                dw.beginPath();
                                dw.moveTo(dU + cI[((cJ * 1 + dc * 1) % dt).toFixed(0)], dH[((c8 * 1 + dc * 1) % dt).toFixed(0)]);
                                dj = dU + cI[((cJ * 1 + dc * 1) % dt).toFixed(0)];
                                continue;
                            }
                            dw.lineTo(dU + cI[((cJ * 1 + dc * 1) % dt).toFixed(0)], dH[((c8 * 1 + dc * 1) % dt).toFixed(0)]);
                        }
                        dw.stroke();
                    }
                    if (aR !== 0) {
                        dw.lineWidth = 1;
                        dw.strokeStyle = "#ff0000";
                        for (db = 0; db < ax; db++) {
                            c8 = ((dt / 2 - (dK / 2).toFixed(0) + db * dK) % dt).toFixed(0);
                            dw.beginPath();
                            dw.moveTo(dU + dZ[cJ], dH[c8]);
                            for (dc = 1; dc < dK * 1 + 1; dc++) {
                                if (((c8 * 1 + dc * 1) % dt).toFixed(0) >= dt - 1) {
                                }
                                if (((c8 * 1 + dc * 1) % dt).toFixed(0) <= 0.5) {
                                    dw.stroke();
                                    dw.beginPath();
                                    dw.moveTo(dU + dZ[((cJ * 1 + dc * 1) % dt).toFixed(0)], dH[((c8 * 1 + dc * 1) % dt).toFixed(0)]);
                                    continue;
                                }
                                dw.lineTo(dU + dZ[((cJ * 1 + dc * 1) % dt).toFixed(0)], dH[((c8 * 1 + dc * 1) % dt).toFixed(0)]);
                            }
                            dw.stroke();
                        }
                    }
                    dw.lineWidth = 1;
                    dw.strokeStyle = "#000000";
                    dw.beginPath();
                    dw.moveTo(0, 0);
                    dw.lineTo(dj, dH[0]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[dt - 1]);
                    dw.lineTo(dj, dH[dt - 1]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(dU, 0);
                    dw.lineTo(dU, dH[dt - 1]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, 0);
                    dw.lineTo(0, dH[dt - 1]);
                    dw.stroke();
                    datm(dw, dH, dt, 0, dU, a3);
                    dw.beginPath();
                    dw.moveTo(0, dH[dt / 4]);
                    dw.lineTo(dU + 50, dH[dt / 4]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[dt / 2]);
                    dw.lineTo(dU + 50, dH[dt / 2]);
                    dw.stroke();
                    dw.beginPath();
                    dw.moveTo(0, dH[(dt / 4) * 3]);
                    dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                    dw.stroke();
                }
            }
            if (dm === "ROUND_TO_TAPERED") {
                c9 = O * a3 * Math.PI;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                cz = 1000000;
                ao = 0;
                cI = [];
                dH = [];
                dZ = [];
                if (aF % 90 === 0) {
                    aF = aF - 0.00001;
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / O) * 2;
                    dR = (O / 2) * Math.cos(dS);
                    cG = (O / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(j / 2, 2) - Math.pow(cG + aq, 2));
                    if (isNaN(du)) {
                        du = 0;
                    }
                    dF = dR / Math.cos((aF / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((aF / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((aF / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    if (cN > ao) {
                        ao = cN;
                    }
                    if (cN < cz) {
                        cz = cN;
                    }
                    dH[dc] = dc;
                    dn[dc] = -1 * (cN * a3);
                    dR = ((O - 2 * cq) / 2) * Math.cos(dS);
                    cG = ((O - 2 * cq) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(j / 2, 2) - Math.pow(cG + aq, 2));
                    if (isNaN(du)) {
                        du = 0;
                    }
                    dF = dR / Math.cos((aF / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((aF / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((aF / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    cX[dc] = -1 * (cN * a3);
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / O) * 2;
                    dR = (O / 2) * Math.cos(dS);
                    cG = (O / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(l / 2, 2) - Math.pow(cG + aq, 2));
                    if (isNaN(du)) {
                        du = 0;
                    }
                    dF = dR / Math.cos((aF / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((aF / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((aF / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    dN[dc] = -1 * (cN * a3);
                    dR = ((O - 2 * cq) / 2) * Math.cos(dS);
                    cG = ((O - 2 * cq) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(l / 2, 2) - Math.pow(cG + aq, 2));
                    if (isNaN(du)) {
                        du = 0;
                    }
                    dF = dR / Math.cos((aF / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((aF / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((aF / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    c1[dc] = -1 * (cN * a3);
                }
                for (dc = 0; dc < dt / 2; dc++) {
                    cI[dc] = dn[dc] + (dc / (dt / 2)) * Math.abs(dn[dc] - dN[dc]);
                    dZ[dc] = cX[dc] + (dc / (dt / 2)) * Math.abs(cX[dc] - c1[dc]);
                }
                for (dc = dt / 2 + 1; dc < dt; dc++) {
                    cI[dc] = dn[dc] + (1 - (dc - dt / 2) / (dt / 2)) * Math.abs(dn[dc] - dN[dc]);
                    dZ[dc] = cX[dc] + (1 - (dc - dt / 2) / (dt / 2)) * Math.abs(cX[dc] - c1[dc]);
                }
                dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                V = new pps((-1 * ao * a3) / 8, dt, dU);
                aI = v.width;
                bL = v.height;
                bP.clearRect(0, 0, aI, bL);
                $("#canvas_rt2tt").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + O.toFixed(1) + "mm [" + (O / 25.4).toFixed(3) + '"] O.D.      ( ' + cq.toFixed(1) + "mm [" + (cq / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                dw.fillText("Mating Tapered Tube is " + j.toFixed(1) + "mm [" + (j / 25.4).toFixed(3) + '"] O.D. at the lower (wider) touch point,', 4 * a3, 28 * a3);
                dw.fillText("and " + l.toFixed(1) + "mm [" + (l / 25.4).toFixed(3) + '"] O.D. at the upper (narrow) touch point,', 4 * a3, 32 * a3);
                dw.fillText("The tubes mate at an angle of: " + aF.toFixed(1) + " degrees.", 4 * a3, 36 * a3);
                dw.fillText("Tube offset (CL/CL) is " + aq.toFixed(1) + "mm [" + (aq / 25.4).toFixed(3) + '"] .', 4 * a3, 40 * a3);
                dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                doiaocla(dw, dU, cI, dZ, dH, cq, dt);
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(dU + cI[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt - 1]);
                dw.lineTo(dU + cI[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
            }
            if (dm === "FLAT_AIRFRAME_TRUSS_CLUSTER") {
                c9 = ca * a3 * Math.PI;
                dt = Math.floor(c9 + 0.5);
                c6 = Math.floor(c9 / 4 + 0.5);
                dt = 4 * c6;
                cz = 1000000;
                ao = 0;
                xPointsLeft = [];
                xPointsRight = [];
                dH = [];
                x_ID_PointsLeft = [];
                x_ID_PointsRight = [];
                if (c % 90 === 0) {
                    c = c - 0.00001;
                }
                if (a0 % 90 === 0) {
                    a0 = a0 - 0.00001;
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / ca) * 2;
                    dR = (ca / 2) * Math.cos(dS);
                    cG = (ca / 2) * Math.sin(dS);
                    du = Math.sqrt((ar / 2) * (ar / 2) - cG * cG);
                    dF = dR / Math.cos((c / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((c / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((c / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    if (cN > ao) {
                        ao = cN;
                    }
                    if (cN < cz) {
                        cz = cN;
                    }
                    dH[dc] = dc;
                    xPointsLeft[dc] = -1 * (cN * a3);
                    dR = ((ca - 2 * aJ) / 2) * Math.cos(dS);
                    cG = ((ca - 2 * aJ) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(ar / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos((c / 360) * 2 * Math.PI);
                    dT = dR * Math.tan((c / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin((c / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    x_ID_PointsLeft[dc] = -1 * (cN * a3);
                }
                for (dc = 0; dc < dt; dc++) {
                    dv = dc / a3;
                    dS = (dv / ca) * 2;
                    dR = (ca / 2) * Math.cos(dS);
                    cG = (ca / 2) * Math.sin(dS);
                    du = Math.sqrt((ce / 2) * (ce / 2) - cG * cG);
                    dF = dR / Math.cos(((180 - a0) / 360) * 2 * Math.PI);
                    dT = dR * Math.tan(((180 - a0) / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin(((180 - a0) / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    if (cN > ao) {
                        ao = cN;
                    }
                    if (cN < cz) {
                        cz = cN;
                    }
                    dH[dc] = dc;
                    xPointsRight[dc] = -1 * (cN * a3);
                    dR = ((ca - 2 * aJ) / 2) * Math.cos(dS);
                    cG = ((ca - 2 * aJ) / 2) * Math.sin(dS);
                    du = Math.sqrt(Math.pow(ce / 2, 2) - Math.pow(cG, 2));
                    dF = dR / Math.cos(((180 - a0) / 360) * 2 * Math.PI);
                    dT = dR * Math.tan(((180 - a0) / 360) * 2 * Math.PI);
                    cL = (dF + du) / Math.sin(((180 - a0) / 360) * 2 * Math.PI);
                    cN = cL - dT;
                    if (isNaN(cN)) {
                        cN = 0;
                    }
                    x_ID_PointsRight[dc] = -1 * (cN * a3);
                }
                dU = 3 * 25.4 * a3 + Math.round(ao / 25.4) * 25.4 * a3;
                V = new pps((ao * a3) / 2, dt, dU);
                bA = ab.width;
                b0 = ab.height;
                aB.clearRect(0, 0, bA, b0);
                $("#canvas_fatc").attr({ width: V.width, height: V.height });
                phop(dw, dm, a3);
                dw.fillText("This tube is " + ca.toFixed(1) + "mm [" + (ca / 25.4).toFixed(3) + '"] O.D.      ( ' + aJ.toFixed(1) + "mm [" + (aJ / 25.4).toFixed(3) + '"] wall)', 4 * a3, 24 * a3);
                dw.fillText("Mating Tube Left is " + ar.toFixed(1) + "mm [" + (ar / 25.4).toFixed(3) + '"] O.D. at ' + c.toFixed(1) + " degrees.", 4 * a3, 28 * a3);
                dw.fillText("Mating Tube Right is " + ce.toFixed(1) + "mm [" + (ce / 25.4).toFixed(3) + '"] O.D. at ' + a0.toFixed(1) + " degrees.", 4 * a3, 32 * a3);
                dw.fillText("<-- Edge reference to base tube CL intersection is --> ", 4 * a3, 50 * a3);
                dw.fillText("                 " + (dU / a3).toFixed(1) + " mm   [ " + (dU / 25.4 / a3).toFixed(2) + " in. ] ", 4 * a3, 54 * a3);
                doiaoclcm(dw, dU, xPointsLeft, xPointsRight, x_ID_PointsLeft, x_ID_PointsRight, dH, aJ, dt);
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(dU + xPointsLeft[0], dH[0]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt - 1]);
                dw.lineTo(dU + xPointsLeft[dt - 1], dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(dU, 0);
                dw.lineTo(dU, dH[dt - 1]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, 0);
                dw.lineTo(0, dH[dt - 1]);
                dw.stroke();
                datm(dw, dH, dt, 0, dU, a3);
                dw.beginPath();
                dw.moveTo(0, dH[dt / 4]);
                dw.lineTo(dU + 50, dH[dt / 4]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[dt / 2]);
                dw.lineTo(dU + 50, dH[dt / 2]);
                dw.stroke();
                dw.beginPath();
                dw.moveTo(0, dH[(dt / 4) * 3]);
                dw.lineTo(dU + 50, dH[(dt / 4) * 3]);
                dw.stroke();
            }
        }
    }
    Math.degrees = function (a) {
        return a * (180 / Math.PI);
    };
    Math.radians = function (a) {
        return a * (Math.PI / 180);
    };
    guniac2m = function (d) {
        var g = $(d).val();
        var c = g;
        var f = [];
        var j = [];
        var e = false;
        var a = 1;
        var h;
        c = c.trim();
        c = c.toLowerCase();
        var b = new RegExp("mm");
        if (b.test(c)) {
            f = c.split("mm");
            c = f[0] + f[1];
            while (f.length > 0) {
                f.pop();
            }
        }
        c = c.replace("inches", '"');
        c = c.replace("inch", '"');
        c = c.replace("in", '"');
        b = new RegExp('"');
        if (b.test(c)) {
            f = c.split('"');
            c = f[0];
            e = true;
            while (f.length > 0) {
                f.pop();
            }
        } else {
            e = false;
        }
        c = c.trim();
        b = new RegExp("^-");
        if (b.test(c)) {
            a = -1;
            c = c.slice(1);
        }
        b = new RegExp("-");
        if (b.test(c)) {
            f = c.split("-");
            f[0] = f[0].trim();
            f[1] = f[1].trim();
            b = new RegExp("/");
            if (!b.test(f[1])) {
                console.log("Oops.  We found a - but no divide by symbol.  Is this value entered correctly? " + g);
            } else {
                j = f[1].split("/");
                h = j[0] / j[1];
                c = parseInt(f[0]) + h;
                while (j.length > 0) {
                    j.pop();
                }
            }
        }
        b = new RegExp("/");
        if (b.test(c)) {
            j = c.split("/");
            h = j[0] / j[1];
            c = h;
        }
        if (e) {
            c = c * 25.4;
        }
        c = c * a;
        if (isNaN(c)) {
            $("#numeric_input_info_box").html(
                "Please check this entry:  <br/><br/>&nbsp;&nbsp;&nbsp;" +
                    g +
                    '<br/><br/> Examples of acceptable input:  <ul><li>25.4 </li> <li>20-1/2</li><li>1"</li><li>1-1/4"</li><li>1 inch</li><li>2.5"</li><li>Negative numbers allowed as appropriate.</li></ul>'
            );
            $("#numeric_input_info_box").dialog("open");
        }
        return c;
    };
    function datm(c, f, b, e, d, a) {
        for (i = e; i < d; i += 25.4 * a) {
            c.beginPath();
            c.moveTo(i, 0);
            c.lineTo(i, 3 * a);
            c.stroke();
            c.beginPath();
            c.moveTo(i, f[b - 1] - 3 * a);
            c.lineTo(i, f[b - 1] + 0);
            c.stroke();
        }
    }
    function d9drldto(b, a, d, c, e) {
        var f = Math.round(c / (4 * e));
        b.beginPath();
        b.moveTo(0, d[f]);
        b.lineTo(a[f], d[f]);
        b.stroke();
        b.beginPath();
        b.moveTo(0, d[f + Math.round(c / 4)]);
        b.lineTo(a[f + Math.round(c / 4)], d[f + Math.round(c / 4)]);
        b.stroke();
        b.beginPath();
        b.moveTo(0, d[f + Math.round(c / 2)]);
        b.lineTo(a[f + Math.round(c / 2)], d[f + Math.round(c / 2)]);
        b.stroke();
        b.beginPath();
        b.moveTo(0, d[f + Math.round((c / 4) * 3)]);
        b.lineTo(a[f + Math.round((c / 4) * 3)], d[f + Math.round((c / 4) * 3)]);
        b.stroke();
    }
    function doiaocla(c, b, g, f, e, a, d) {
        c.lineWidth = 1.2;
        c.strokeStyle = "#000000";
        c.beginPath();
        c.moveTo(b + g[0], e[0]);
        for (i = 1; i < d; i++) {
            c.lineTo(b + g[i], e[i]);
        }
        c.stroke();
        if (a !== 0) {
            c.lineWidth = 1;
            c.strokeStyle = "#ff0000";
            c.beginPath();
            c.moveTo(b + f[0], e[0]);
            for (i = 1; i < d; i++) {
                c.lineTo(b + f[i], e[i]);
            }
            c.stroke();
        }
        c.lineWidth = 1;
        c.strokeStyle = "#000000";
    }
    function doiaoclcm(c, h, a, j, g, b, f, e, d) {
        c.lineWidth = 1.2;
        c.strokeStyle = "#000000";
        c.beginPath();
        if (a[0] < j[0]) {
            c.moveTo(h + a[0], f[0]);
        } else {
            c.moveTo(h + j[0], f[0]);
        }
        for (i = 1; i < d; i++) {
            if (a[i] < j[i]) {
                c.lineTo(h + a[i], f[i]);
            } else {
                c.lineTo(h + j[i], f[i]);
            }
        }
        c.stroke();
        if (e !== 0) {
            c.lineWidth = 1;
            c.strokeStyle = "#ff0000";
            c.beginPath();
            if (g[0] < b[0]) {
                c.moveTo(h + g[0], f[0]);
            } else {
                c.moveTo(h + b[0], f[0]);
            }
            for (i = 1; i < d; i++) {
                if (g[i] < b[i]) {
                    c.lineTo(h + g[i], f[i]);
                } else {
                    c.lineTo(h + b[i], f[i]);
                }
            }
            c.stroke();
        }
        c.lineWidth = 1;
        c.strokeStyle = "#000000";
    }
    function dacoc(b, a, d, c) {
        b.lineWidth = 1.2;
        b.strokeStyle = "#000000";
        b.beginPath();
        b.moveTo(a[0], d[0]);
        for (i = 1; i < c; i++) {
            b.lineTo(a[i], d[i]);
        }
        b.stroke();
        b.lineWidth = 1;
        b.strokeStyle = "#000000";
        b.beginPath();
        b.moveTo(0, 0);
        b.lineTo(a[0], d[0]);
        b.stroke();
        b.beginPath();
        b.moveTo(0, 0);
        b.lineTo(0, d[c - 1]);
        b.stroke();
        b.beginPath();
        b.moveTo(0, d[c - 1]);
        b.lineTo(a[c - 1], d[c - 1]);
        b.stroke();
    }
    function poae(d, b) {
        var c = ((d / 2 - b / 2) * (d / 2 - b / 2)) / ((d / 2 + b / 2) * (d / 2 + b / 2));
        var a = Math.PI * (d / 2 + b / 2) * (1 + (3 * c) / (10 + Math.sqrt(4 - 3 * c)));
        return a;
    }
    function pps(c, b, a) {
        this.paperSize = "letter";
        this.width = 768;
        this.height = 960;
        if (c + a > 816 || b > 1056) {
            console.log("larger than letter size...");
            this.paperSize = "a3";
            this.width = 1122;
            this.height = 1587;
        }
        if (c + a > 794 || b > 1122) {
            console.log("larger than a4 size...");
            this.paperSize = "a3";
            this.width = 1122;
            this.height = 1587;
        }
        if (c + a > 1122 || b > 1587) {
            console.log("larger than a3 size...");
            this.paperSize = "a2";
            this.width = 1587;
            this.height = 2245;
        }
        if (c + a > 1587 || b > 2245) {
            console.log("larger than a2 size...");
            this.paperSize = "a1";
            this.width = 2245;
            this.height = 3178;
        }
        if (c + a > 2245 || b > 3178) {
            console.log("larger than a1 size...");
            this.paperSize = "a0";
            this.width = 3178;
            this.height = 4493;
        }
    }
    function drawEllipse(b, e, d, c, f, g) {
        radiusX = c;
        radiusY = f;
        b.beginPath();
        for (var a = 0 * Math.PI; a < 2 * Math.PI; a += 0.01) {
            xPos = e - radiusX * Math.sin(a) * Math.sin(g * Math.PI) + radiusY * Math.cos(a) * Math.cos(g * Math.PI);
            yPos = d + radiusY * Math.cos(a) * Math.sin(g * Math.PI) + radiusX * Math.sin(a) * Math.cos(g * Math.PI);
            if (a === 0) {
                b.moveTo(xPos, yPos);
            } else {
                b.lineTo(xPos, yPos);
            }
        }
        b.closePath();
    }
    function phop(a, b, c) {
        a.font = "12px Arial";
        a.textAlign = "left";
        a.textBaseline = "bottom";
        a.fillText("Tube Development Flat Pattern: " + b, 4 * c, 10 * c);
        a.fillText("Calculation Date/Time: " + new Date().toLocaleString(), 4 * c, 14 * c);
    }
    $.fn.serializeObject = function () {
        var c = {};
        var b = this.serializeArray();
        $.each(b, function () {
            if (c[this.name] !== undefined) {
                if (!c[this.name].push) {
                    c[this.name] = [c[this.name]];
                }
                c[this.name].push(this.value || "");
            } else {
                c[this.name] = this.value || "";
            }
        });
        return c;
    };
}
/*
     FILE ARCHIVED ON 05:46:29 Aug 02, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:18:42 Apr 06, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 90.486
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.067
  cdx.remote: 0.044
  esindex: 0.005
  LoadShardBlock: 64.922 (3)
  PetaboxLoader3.datanode: 130.26 (4)
  load_resource: 1242.285
  PetaboxLoader3.resolve: 1144.124
*/

