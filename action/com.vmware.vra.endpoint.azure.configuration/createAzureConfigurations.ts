/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure.configuration {
export function createAzureConfigurations(): void {return [
    createConfigurationIfNeeded("General" , {
        apiVersion: "2014-04-01-preview",
        imageValidation: "enabled",
    }),

    createConfigurationIfNeeded("Allocation", {
        allocationCounters: new Properties(),
        lockId: "AZURE_ALLOCATION_LOCK"
    }),

    createConfigurationIfNeeded("EnvironmentUri", {
        AZURE_serviceUri: "https://management.azure.com/",
        AZURE_loginUrl: "https://login.microsoftonline.com/",
        AZURE_storageUri: "https://mystorageaccount.blob.core.windows.net/",
        AZURE_CHINA_serviceUri: "https://management.chinacloudapi.cn/",
        AZURE_CHINA_loginUrl: "https://login.chinacloudapi.cn/",
        AZURE_CHINA_storageUri: "https://mystorageaccount.blob.core.chinacloudapi.cn/",
        AZURE_GERMANY_serviceUri: "https://management.microsoftazure.de/",
        AZURE_GERMANY_loginUrl: "https://login.microsoftonline.de/",
        AZURE_GERMANY_storageUri: "https://mystorageaccount.blob.core.cloudapi.de/",
        AZURE_US_GOVERNMENT_serviceUri: "https://management.usgovcloudapi.net/",
        AZURE_US_GOVERNMENT_loginUrl: "https://login-us.microsoftonline.com/",
        AZURE_US_GOVERNMENT_storageUri: "https://mystorageaccount.blob.core.usgovcloudapi.net/"
    }),

	createConfigurationIfNeeded("InstanceDetails", {
        A_Standard_A0:  "CPU Cores (1), Memory:GiB (0.768), Local HDD:GiB (20), Max data disks(1), Max data disk throughput:IOPS (1x500), Max NICs/Network bandwidth (1/low)",
        A_Standard_A1:  "CPU Cores (1), Memory:GiB (1.75), Local HDD:GiB (70), Max data disks(2), Max data disk throughput:IOPS (2x500), Max NICs/Network bandwidth (1/moderate)",
        A_Standard_A2:  "CPU Cores (2), Memory:GiB (3.5), Local HDD:GiB (135), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (1/moderate)",
        A_Standard_A3:  "CPU Cores (4), Memory:GiB (7), Local HDD:GiB (285), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (2/high)",
        A_Standard_A4:  "CPU Cores (8), Memory:GiB (14), Local HDD:GiB (605), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (4/high)",
        A_Standard_A5:  "CPU Cores (2), Memory:GiB (14), Local HDD:GiB (135), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (1/moderate)",
        A_Standard_A6:  "CPU Cores (4), Memory:GiB (28), Local HDD:GiB (285), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (2/high)",
        A_Standard_A7:  "CPU Cores (8), Memory:GiB (56), Local HDD:GiB (605), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (4/high)",
        A_Standard_A8:  "CPU Cores (8), Memory:GiB (56), Local HDD:GiB (382), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (2/high)",
        A_Standard_A9:  "CPU Cores (16), Memory:GiB (112), Local HDD:GiB (382), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (4/very high)",
        A_Standard_A10:  "CPU Cores (8), Memory:GiB (56), Local HDD:GiB (382), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (2/high)",
        A_Standard_A11:  "CPU Cores (16), Memory:GiB (112), Local HDD:GiB (382), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (4/very high)",
        A_Basic_A0:  "CPU Cores (1), Memory:GiB (0.768), Local HDD:GiB (20), Max data disks(1), Max data disk throughput:IOPS (1x300), Max NICs/Network bandwidth (1/low)",
        A_Basic_A1:  "CPU Cores (1), Memory:GiB (1.75), Local HDD:GiB (70), Max data disks(2), Max data disk throughput:IOPS (2x300), Max NICs/Network bandwidth (1/moderate)",
        A_Basic_A2:  "CPU Cores (2), Memory:GiB (3.5), Local HDD:GiB (135), Max data disks(4), Max data disk throughput:IOPS (4x300), Max NICs/Network bandwidth (1/moderate)",
        A_Basic_A3:  "CPU Cores (4), Memory:GiB (7), Local HDD:GiB (285), Max data disks(8), Max data disk throughput:IOPS (8x300), Max NICs/Network bandwidth (2/high)",
        A_Basic_A4:  "CPU Cores (8), Memory:GiB (14), Local HDD:GiB (605), Max data disks(16), Max data disk throughput:IOPS (16x300), Max NICs/Network bandwidth (4/high)",
        Av2_Standard_A1_v2:  "CPU Cores (1), Memory:GiB (2), Local SSD:GiB (10), Max data disks(2), Max data disk throughput:IOPS (2x500), Max NICs/Network bandwidth (1/moderate)",
        Av2_Standard_A2_v2:  "CPU Cores (2), Memory:GiB (4), Local SSD:GiB (20), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (2/moderate)",
        Av2_Standard_A4_v2:  "CPU Cores (4), Memory:GiB (8), Local SSD:GiB (40), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (4/high)",
        Av2_Standard_A8_v2:  "CPU Cores (8), Memory:GiB (16), Local SSD:GiB (80), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (8/high)",
        Av2_Standard_A2m_v2:  "CPU Cores (2), Memory:GiB (16), Local SSD:GiB (20), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (2/moderate)",
        Av2_Standard_A4m_v2:  "CPU Cores (4), Memory:GiB (32), Local SSD:GiB (40), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (4/high)",
        Av2_Standard_A8m_v2:  "CPU Cores (8), Memory:GiB (64), Local SSD:GiB (80), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (8/high)",
        D_Standard_D1:  "CPU Cores (1), Memory:GiB (3.5), Local SSD:GiB (50), Max data disks(2), Max data disk throughput:IOPS (2x500), Max NICs/Network bandwidth (1/moderate)",
        D_Standard_D2:  "CPU Cores (2), Memory:GiB (7), Local SSD:GiB (100), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (2/high)",
        D_Standard_D3:  "CPU Cores (4), Memory:GiB (14), Local SSD:GiB (200), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (4/high)",
        D_Standard_D4:  "CPU Cores (8), Memory:GiB (28), Local SSD:GiB (400), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (8/high)",
        D_Standard_D11:  "CPU Cores (2), Memory:GiB (14), Local SSD:GiB (100), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (2/high)",
        D_Standard_D12:  "CPU Cores (4), Memory:GiB (28), Local SSD:GiB (200), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (4/high)",
        D_Standard_D13:  "CPU Cores (8), Memory:GiB (56), Local SSD:GiB (400), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (8/high)",
        D_Standard_D14:  "CPU Cores (16), Memory:GiB (112), Local SSD:GiB (800), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (8/very high)",
        Dv2_Standard_D1_v2:  "CPU Cores (1), Memory:GiB (3.5), Local SSD:GiB (50), Max data disks(2), Max data disk throughput:IOPS (2x500), Max NICs/Network bandwidth (1/moderate)",
        Dv2_Standard_D2_v2:  "CPU Cores (2), Memory:GiB (7), Local SSD:GiB (100), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (2/high)",
        Dv2_Standard_D3_v2:  "CPU Cores (4), Memory:GiB (14), Local SSD:GiB (200), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (4/high)",
        Dv2_Standard_D4_v2:  "CPU Cores (8), Memory:GiB (28), Local SSD:GiB (400), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (8/high)",
        Dv2_Standard_D5_v2:  "CPU Cores (16), Memory:GiB (56), Local SSD:GiB (800), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (8/extremely high)",
        Dv2_Standard_D11_v2:  "CPU Cores (2), Memory:GiB (14), Local SSD:GiB (100), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (2/high)",
        Dv2_Standard_D12_v2:  "CPU Cores (4), Memory:GiB (28), Local SSD:GiB (200), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (4/high)",
        Dv2_Standard_D13_v2:  "CPU Cores (8), Memory:GiB (56), Local SSD:GiB (400), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (8/high)",
        Dv2_Standard_D14_v2:  "CPU Cores (16), Memory:GiB (112), Local SSD:GiB (800), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (8/extremely high)",
        Dv2_Standard_D15_v2:  "CPU Cores (20), Memory:GiB (140), Local SSD:GiB (1000), Max data disks(40), Max data disk throughput:IOPS (40x500), Max NICs/Network bandwidth (8/extremely high)",
        DS_Standard_DS1:  "CPU Cores (1), Memory:GiB (3.5), Local SSD:GiB (7), Max data disks(2), Max cached disk throughput:IOPS/MBps (cache size in GiB) (4000/32 (43)), Max uncached disk throughput:IOPS/MBps (3200/32), Max NICs/Network bandwidth (1/moderate)",
        DS_Standard_DS2:  "CPU Cores (2), Memory:GiB (7), Local SSD:GiB (14), Max data disks(4), Max cached disk throughput:IOPS/MBps (cache size in GiB) (8000/64 (86)), Max uncached disk throughput:IOPS/MBps (6400/64), Max NICs/Network bandwidth (2/high)",
        DS_Standard_DS3:  "CPU Cores (4), Memory:GiB (14), Local SSD:GiB (28), Max data disks(8), Max cached disk throughput:IOPS/MBps (cache size in GiB) (16000/128 (172)), Max uncached disk throughput:IOPS/MBps (12800/128), Max NICs/Network bandwidth (4/high)",
        DS_Standard_DS4:  "CPU Cores (8), Memory:GiB (28), Local SSD:GiB (56), Max data disks(16), Max cached disk throughput:IOPS/MBps (cache size in GiB) (32000/256 (344)), Max uncached disk throughput:IOPS/MBps (25600/256), Max NICs/Network bandwidth (8/high)",
        DS_Standard_DS11:  "CPU Cores (2), Memory:GiB (14), Local SSD:GiB (28), Max data disks(4), Max cached disk throughput:IOPS/MBps (cache size in GiB) (8000/64 (72)), Max uncached disk throughput:IOPS/MBps (6400/64), Max NICs/Network bandwidth (2/high)",
        DS_Standard_DS12:  "CPU Cores (4), Memory:GiB (28), Local SSD:GiB (56), Max data disks(8), Max cached disk throughput:IOPS/MBps (cache size in GiB) (16000/128 (144)), Max uncached disk throughput:IOPS/MBps (12800/128), Max NICs/Network bandwidth (4/high)",
        DS_Standard_DS13:  "CPU Cores (8), Memory:GiB (56), Local SSD:GiB (112), Max data disks(16), Max cached disk throughput:IOPS/MBps (cache size in GiB) (32000/256 (288)), Max uncached disk throughput:IOPS/MBps (25600/256), Max NICs/Network bandwidth (8/high)",
        DS_Standard_DS14:  "CPU Cores (16), Memory:GiB (112), Local SSD:GiB (224), Max data disks(32), Max cached disk throughput:IOPS/MBps (cache size in GiB) (64000/512 (576)), Max uncached disk throughput:IOPS/MBps (51200/512), Max NICs/Network bandwidth (8/very high)",
        DSv2_Standard_DS1_v2:  "CPU Cores (1), Memory:GiB (3.5), Local SSD:GiB (7), Max data disks(2), Max cached disk throughput:IOPS/MBps (cache size in GiB) (4000/32 (43)), Max uncached disk throughput:IOPS/MBps (3200/48), Max NICs/Network bandwidth (1/moderate)",
        DSv2_Standard_DS2_v2:  "CPU Cores (2), Memory:GiB (7), Local SSD:GiB (14), Max data disks(4), Max cached disk throughput:IOPS/MBps (cache size in GiB) (8000/64 (86)), Max uncached disk throughput:IOPS/MBps (6400/96), Max NICs/Network bandwidth (2/high)",
        DSv2_Standard_DS3_v2:  "CPU Cores (4), Memory:GiB (14), Local SSD:GiB (28), Max data disks(8), Max cached disk throughput:IOPS/MBps (cache size in GiB) (16000/128 (172)), Max uncached disk throughput:IOPS/MBps (12800/192), Max NICs/Network bandwidth (4/high)",
        DSv2_Standard_DS4_v2:  "CPU Cores (8), Memory:GiB (28), Local SSD:GiB (56), Max data disks(16), Max cached disk throughput:IOPS/MBps (cache size in GiB) (32000/256 (344)), Max uncached disk throughput:IOPS/MBps (25600/384), Max NICs/Network bandwidth (8/high)",
        DSv2_Standard_DS5_v2:  "CPU Cores (16), Memory:GiB (56), Local SSD:GiB (112), Max data disks(32), Max cached disk throughput:IOPS/MBps (cache size in GiB) (64000/512 (688)), Max uncached disk throughput:IOPS/MBps (51200/768), Max NICs/Network bandwidth (8/extremely high)",
        DSv2_Standard_DS11_v2:  "CPU Cores (2), Memory:GiB (14), Local SSD:GiB (28), Max data disks(4), Max cached disk throughput:IOPS/MBps (cache size in GiB) (8000/64 (72)), Max uncached disk throughput:IOPS/MBps (6400/96), Max NICs/Network bandwidth (2/high)",
        DSv2_Standard_DS12_v2:  "CPU Cores (4), Memory:GiB (28), Local SSD:GiB (56), Max data disks(8), Max cached disk throughput:IOPS/MBps (cache size in GiB) (16000/128 (144)), Max uncached disk throughput:IOPS/MBps (12800/192), Max NICs/Network bandwidth (4/high)",
        DSv2_Standard_DS13_v2:  "CPU Cores (8), Memory:GiB (56), Local SSD:GiB (112), Max data disks(16), Max cached disk throughput:IOPS/MBps (cache size in GiB) (32000/256 (288)), Max uncached disk throughput:IOPS/MBps (25600/384), Max NICs/Network bandwidth (8/high)",
        DSv2_Standard_DS14_v2:  "CPU Cores (16), Memory:GiB (112), Local SSD:GiB (224), Max data disks(32), Max cached disk throughput:IOPS/MBps (cache size in GiB) (64000/512 (576)), Max uncached disk throughput:IOPS/MBps (51200/768), Max NICs/Network bandwidth (8/extremely high)",
        DSv2_Standard_DS15_v2:  "CPU Cores (20), Memory:GiB (140), Local SSD:GiB (280), Max data disks(40), Max cached disk throughput:IOPS/MBps (cache size in GiB) (80000/640 (720)), Max uncached disk throughput:IOPS/MBps (64000/960), Max NICs/Network bandwidth (8/extremely high)",
        F_Standard_F1:  "CPU Cores (1), Memory:GiB (2), Local SSD:GiB (16), Max data disks(2), Max data disk throughput:IOPS (2x500), Max NICs/Network bandwidth (1/moderate)",
        F_Standard_F2:  "CPU Cores (2), Memory:GiB (4), Local SSD:GiB (32), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (2/high)",
        F_Standard_F4:  "CPU Cores (4), Memory:GiB (8), Local SSD:GiB (64), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (4/high)",
        F_Standard_F8:  "CPU Cores (8), Memory:GiB (16), Local SSD:GiB (128), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (8/high)",
        F_Standard_F16:  "CPU Cores (16), Memory:GiB (32), Local SSD:GiB (256), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (8/extremely high)",
        F_Standard_F1s:  "CPU Cores (1), Memory:GiB (2), Local SSD:GiB (4), Max data disks(2), Max cached disk throughput:IOPS/MBps (cache size in GiB) (4000/32 (12)), Max uncached disk throughput:IOPS/MBps (3200/48), Max NICs/Network bandwidth (1/moderate)",
        F_Standard_F2s:  "CPU Cores (2), Memory:GiB (4), Local SSD:GiB (8), Max data disks(4), Max cached disk throughput:IOPS/MBps (cache size in GiB) (8000/64 (24)), Max uncached disk throughput:IOPS/MBps (6400/96), Max NICs/Network bandwidth (2/high)",
        F_Standard_F4s:  "CPU Cores (4), Memory:GiB (8), Local SSD:GiB (16), Max data disks(8), Max cached disk throughput:IOPS/MBps (cache size in GiB) (16000/128 (48)), Max uncached disk throughput:IOPS/MBps (12800/192), Max NICs/Network bandwidth (4/high)",
        F_Standard_F8s:  "CPU Cores (8), Memory:GiB (16), Local SSD:GiB (32), Max data disks(16), Max cached disk throughput:IOPS/MBps (cache size in GiB) (32000/256 (96)), Max uncached disk throughput:IOPS/MBps (25600/384), Max NICs/Network bandwidth (8/high)",
        F_Standard_F16s:  "CPU Cores (16), Memory:GiB (32), Local SSD:GiB (64), Max data disks(32), Max cached disk throughput:IOPS/MBps (cache size in GiB) (64000/512 (192)), Max uncached disk throughput:IOPS/MBps (51200/768), Max NICs/Network bandwidth (8/extremely high)",
        G_Standard_G1:  "CPU Cores (2), Memory:GiB (28), Local SSD:GiB (384), Max data disks(4), Max data disk throughput:IOPS (4x500), Max NICs/Network bandwidth (1/high)",
        G_Standard_G2:  "CPU Cores (4), Memory:GiB (56), Local SSD:GiB (768), Max data disks(8), Max data disk throughput:IOPS (8x500), Max NICs/Network bandwidth (2/high)",
        G_Standard_G3:  "CPU Cores (8), Memory:GiB (112), Local SSD:GiB (1536), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (4/very high)",
        G_Standard_G4:  "CPU Cores (16), Memory:GiB (224), Local SSD:GiB (3072), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (8/extremely high)",
        G_Standard_G5:  "CPU Cores (32), Memory:GiB (448), Local SSD:GiB (6144), Max data disks(64), Max data disk throughput:IOPS (64x500), Max NICs/Network bandwidth (8/extremely high)",
        GS_Standard_GS1:  "CPU Cores (2), Memory:GiB (28), Local SSD:GiB (56), Max data disks(4), Max cached disk throughput:IOPS/MBps (cache size in GiB) (1000/100 (264)), Max uncached disk throughput:IOPS/MBps (5000/125), Max NICs/Network bandwidth (1/high)",
        GS_Standard_GS2:  "CPU Cores (4), Memory:GiB (56), Local SSD:GiB (112), Max data disks(8), Max cached disk throughput:IOPS/MBps (cache size in GiB) (2000/200 (528)), Max uncached disk throughput:IOPS/MBps (10000/250), Max NICs/Network bandwidth (2/high)",
        GS_Standard_GS3:  "CPU Cores (8), Memory:GiB (112), Local SSD:GiB (224), Max data disks(16), Max cached disk throughput:IOPS/MBps (cache size in GiB) (40000/400 (1056)), Max uncached disk throughput:IOPS/MBps (20000/500), Max NICs/Network bandwidth (4/very high)",
        GS_Standard_GS4:  "CPU Cores (16), Memory:GiB (224), Local SSD:GiB (448), Max data disks(32), Max cached disk throughput:IOPS/MBps (cache size in GiB) (80000/800 (2112)), Max uncached disk throughput:IOPS/MBps (40000/1000), Max NICs/Network bandwidth (8/extremely high)",
        GS_Standard_GS5:  "CPU Cores (32), Memory:GiB (448), Local SSD:GiB (896), Max data disks(64), Max cached disk throughput:IOPS/MBps (cache size in GiB) (160000/1600 (4224)), Max uncached disk throughput:IOPS/MBps (80000/2000), Max NICs/Network bandwidth (8/extremely high)",
        H_Standard_H8:  "CPU Cores (8), Memory:GiB (56), Local SSD:GiB (1000), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (2/high)",
        H_Standard_H16:  "CPU Cores (16), Memory:GiB (112), Local SSD:GiB (2000), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (4/very high)",
        H_Standard_H8m:  "CPU Cores (8), Memory:GiB (112), Local SSD:GiB (1000), Max data disks(16), Max data disk throughput:IOPS (16x500), Max NICs/Network bandwidth (2/high)",
        H_Standard_H16m:  "CPU Cores (16), Memory:GiB (224), Local SSD:GiB (2000), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (4/very high)",
        H_Standard_H16r:  "CPU Cores (16), Memory:GiB (112), Local SSD:GiB (2000), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (4/very high)",
        H_Standard_H16mr:  "CPU Cores (16), Memory:GiB (224), Local SSD:GiB (2000), Max data disks(32), Max data disk throughput:IOPS (32x500), Max NICs/Network bandwidth (4/very high)",
        NV_Standard_NV6:  "CPU Cores (6), Memory:GiB (56), Local SSD:GiB (380), GPU (1)",
        NV_Standard_NV12:  "CPU Cores (12), Memory:GiB (112), Local SSD:GiB (680), GPU (1)",
        NV_Standard_NV24:  "CPU Cores (24), Memory:GiB (224), Local SSD:GiB (1440), GPU (1)",
        NC_Standard_NC6:  "CPU Cores (6), Memory:GiB (56), Local SSD:GiB (380), GPU (1)",
        NC_Standard_NC12:  "CPU Cores (12), Memory:GiB (112), Local SSD:GiB (680), GPU (2)",
        NC_Standard_NC24:  "CPU Cores (24), Memory:GiB (224), Local SSD:GiB (1440), GPU (4)",
        NC_Standard_NC24r:  "CPU Cores (24), Memory:GiB (224), Local SSD:GiB (1440), GPU (4)",
        B_Standard_B1s: "CPU Cores (1), Memory:GiB (1), Local SSD:GiB (4), Base Perf of a Core (10) %, Credits banked / hour (6), Max Banked Credits (144), Max data disks (2), Max local disk perf: IOPS / MBps (400/10), Max uncached disk perf: IOPS / MBps (320/10), Max NICs (2)",
        B_Standard_B1ms: "CPU Cores (1), Memory:GiB (2), Local SSD:GiB (4), Base Perf of a Core (20) %, Credits banked / hour (12), Max Banked Credits (288), Max data disks (2), Max local disk perf: IOPS / MBps (800/10), Max uncached disk perf: IOPS / MBps (640/10), Max NICs (2)",
        B_Standard_B2s: "CPU Cores (2), Memory:GiB (4), Local SSD:GiB (8), Base Perf of a Core (40) %, Credits banked / hour (24), Max Banked Credits (576), Max data disks (4), Max local disk perf: IOPS / MBps (1600/15), Max uncached disk perf: IOPS / MBps (1280/15), Max NICs (3)",
        B_Standard_B2ms: "CPU Cores (2), Memory:GiB (8), Local SSD:GiB (16), Base Perf of a Core (60) %, Credits banked / hour (36), Max Banked Credits (864), Max data disks (4), Max local disk perf: IOPS / MBps (2400/22.5), Max uncached disk perf: IOPS / MBps (1920/22.5), Max NICs (3)",
        B_Standard_B4ms: "CPU Cores (4), Memory:GiB (16), Local SSD:GiB (32), Base Perf of a Core (90) %, Credits banked / hour (54), Max Banked Credits (1296), Max data disks (8), Max local disk perf: IOPS / MBps (3600/35), Max uncached disk perf: IOPS / MBps (2880/35), Max NICs (4)",
        B_Standard_B8ms: "CPU Cores (8), Memory:GiB (32), Local SSD:GiB (64), Base Perf of a Core (135) %, Credits banked / hour (81), Max Banked Credits (1944), Max data disks (16), Max local disk perf: IOPS / MBps (4320/50), Max uncached disk perf: IOPS / MBps (4320/50), Max NICs (4)"
    }),

    createConfigurationIfNeeded("Machine Naming", {
        namingData: [],
        lockId: "AZURE_MACHINE_NAMING_LOCK",
        maxNameGenerationAttempts: 10.0,
        defaultLowestNumber: 1.0,
        defaultNumberOfDigits: 4.0
    })
];

function createConfigurationIfNeeded(config, attributesMap) {
    configuration = getConfiguration(config);

    if (configuration == null) {
        System.log("AzureConfiguration creating {" + config + "}");
        configuration = Server.createConfigurationElement("Azure", config);
    }

    for (var attributeKey in attributesMap) {
        var attribute = configuration.getAttributeWithKey(attributeKey);
        // Skip the configurations that already have a value
        if (attribute == null) {
            System.log("AzureConfiguration setting [" + attributeKey + "] = " + attributesMap[attributeKey] + " in {" + configuration.name + "}");
            configuration.setAttributeWithKey(attributeKey , attributesMap[attributeKey]);
        }
    }

    return configuration;
}

function getConfiguration(configurationName) {
    var azureConfigurationsCategory = Server.getConfigurationElementCategoryWithPath("Azure");
    if (azureConfigurationsCategory == null) {
        // Azure category isn't created yet.
        return null;
    }

    var azureConfigurations = azureConfigurationsCategory.allConfigurationElements;

    for (var i = 0; i < azureConfigurations.length; i++) {
        if (azureConfigurations[i].name == configurationName) {
            return azureConfigurations[i];
        }
    }

    return null;
}
}
}
