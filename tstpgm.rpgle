     H DEBUG DATEDIT(*YMD)
     H Option(*SrcStmt:*NoDebugIO)
     H DFTACTGRP(*NO)  ActGrp(*new)
     H pgminfo(*pcml:*module:*dclcase)

     D makestring      PR              O    EXTPROC(*JAVA:
     D                                       'java.lang.String':
     D                                       *CONSTRUCTOR)
     D    bytes                     256A    CONST VARYING

       dcl-pi *n;
        action char(10);
        rtnMsg char(100);
       end-pi;

       if action = 'JAVA';
         monitor;
           makestring('TEST');
           rtnMsg = 'Success';
         on-error;
           rtnMsg = 'failed';
         endmon;
       else;
         rtnMsg = 'Success';
       endif;

       *inlr = *on;
       return;