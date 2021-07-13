using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
namespace InterviewTest
{
    class Program
    {
        static void Main(string[] args)
        {
            var proc = Process.Start(@"cmd.exe ",@"/c C:\Users\DELL\Documents\GitHub\InterviewTest\formSearch.html");
        }
    }
}
